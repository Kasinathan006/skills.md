---
name: moneyclaw
description: Issue virtual Visa/MC cards funded by USDT. Check balance, get card credentials, view spending history, fetch OTP codes — all via REST API.
version: 2.1.0
homepage: https://moneyclaw.ai
metadata: {"openclaw":{"requires":{"env":["MONEYCLAW_API_KEY"]},"primaryEnv":"MONEYCLAW_API_KEY","emoji":"💳"}}
---

# MoneyClaw — Virtual Cards for Agents

You have access to the MoneyClaw API. Use it to check your balance, get virtual card credentials for online purchases, view card spending history, and fetch OTP codes for 3DS verification.

## Authentication

All requests require a Bearer token. Use the `MONEYCLAW_API_KEY` environment variable.

```
Authorization: Bearer $MONEYCLAW_API_KEY
```

Base URL: `https://moneyclaw.ai/api`

## Endpoints

### Check Account Status

```bash
curl -H "Authorization: Bearer $MONEYCLAW_API_KEY" \
  https://moneyclaw.ai/api/me
```

Response includes `balance` (USD string), `card` object with `cardId`, `maskedPan`, `status`, `cardBalance` with available funds, `mailboxAddress`, and `depositAddress` for USDT top-ups.

### Get Account Balance

```bash
curl -H "Authorization: Bearer $MONEYCLAW_API_KEY" \
  https://moneyclaw.ai/api/me/balance
```

Returns `{ "balance": "142.50", "currency": "USD" }`.

### View Account Transactions (deposits, topups, fees)

```bash
curl -H "Authorization: Bearer $MONEYCLAW_API_KEY" \
  "https://moneyclaw.ai/api/me/transactions?limit=20&offset=0"
```

Returns internal transactions: USDT deposits, card topups, fees, refunds. Each has `type`, `amount`, `currency`, `description`, `createdAt`.

### Issue a Card

```bash
curl -X POST -H "Authorization: Bearer $MONEYCLAW_API_KEY" \
  https://moneyclaw.ai/api/cards/issue
```

Issues a new virtual card. Requires minimum $25 balance. Returns card info with `cardId`, `maskedPan`, `status`.

### Get Card Credentials (for online purchases)

```bash
curl -H "Authorization: Bearer $MONEYCLAW_API_KEY" \
  https://moneyclaw.ai/api/cards/{cardId}/sensitive
```

Returns `pan`, `cvv`, `expiryMonth`, `expiryYear`, `cardHolderName`, `billingAddress`. Rate limited to 10 requests/minute.

**Important:** Use the `cardId` from the `/api/me` response (`card.cardId` field).

### Get Card Balance

```bash
curl -H "Authorization: Bearer $MONEYCLAW_API_KEY" \
  https://moneyclaw.ai/api/cards/{cardId}/balance
```

Returns the card's available balance: `{ "availableBalance": { "value": "85.00", "currency": "USD" } }`.

### View Card Spending History (purchases, declines)

```bash
curl -H "Authorization: Bearer $MONEYCLAW_API_KEY" \
  "https://moneyclaw.ai/api/cards/{cardId}/transactions?limit=20&offset=0"
```

Returns card transactions from the payment provider: purchases, declines, refunds. Each has `merchantName`, `amount`, `status` (SUCCESS/DECLINE), `type` (CARD_PAYMENT), `date`, `direction`.

### Top Up Card Balance

```bash
curl -X POST -H "Authorization: Bearer $MONEYCLAW_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"amount": 50, "currency": "USD"}' \
  https://moneyclaw.ai/api/cards/{cardId}/topup
```

Moves funds from your account balance to the card. The card is prepaid — you cannot spend more than the loaded amount.

### Fetch Latest OTP Code (for 3DS verification)

```bash
curl -H "Authorization: Bearer $MONEYCLAW_API_KEY" \
  https://moneyclaw.ai/api/inbox/latest-otp
```

Returns the most recent email with extracted OTP codes. The `extractedCodes` field is an array of strings. Use the first element as the verification code.

If a purchase triggers 3DS, wait 10-30 seconds for the OTP email to arrive, then call this endpoint.

### List Inbox Emails

```bash
curl -H "Authorization: Bearer $MONEYCLAW_API_KEY" \
  "https://moneyclaw.ai/api/inbox?limit=20"
```

Returns all emails in your dedicated inbox. Each has `id`, `from`, `subject`, `extractedCodes`, `category`, `receivedAt`.

### Get Email Details

```bash
curl -H "Authorization: Bearer $MONEYCLAW_API_KEY" \
  https://moneyclaw.ai/api/inbox/{messageId}
```

Returns full email body (`bodyText`, `bodyHtml`) along with metadata.

## Typical Purchase Flow

1. Check balance with `GET /api/me` — ensure sufficient funds on card
2. If card balance is low, top up with `POST /api/cards/{cardId}/topup`
3. Get card credentials with `GET /api/cards/{cardId}/sensitive`
4. Use PAN, CVV, expiry to fill in payment form on merchant site
5. If 3DS is triggered, wait ~15 seconds then `GET /api/inbox/latest-otp`
6. Submit the OTP code from `extractedCodes[0]`
7. Purchase complete — verify with `GET /api/cards/{cardId}/transactions`

## Important Notes

- The card is **prepaid**. You cannot spend more than the loaded balance.
- Card credentials are rate-limited (10/min). Cache them for the duration of a purchase session.
- OTP codes arrive via email to a dedicated inbox. There may be a 10-30 second delay.
- Fund the account by sending USDT (TRC20) to the deposit address from `GET /api/me`.
- Use `GET /api/cards/{cardId}/transactions` to see actual spending at merchants.
- Use `GET /api/me/transactions` to see account-level movements (deposits, topups, fees).
