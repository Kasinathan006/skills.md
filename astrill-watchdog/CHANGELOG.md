# Changelog

## 1.0.4

- **Refactor:** Reduced script from 312 to ~200 lines by compacting verbose
  echo-heavy blocks into concise equivalents — same functionality, fully visible
  in ClawHub's file preview without truncation. Addresses reviewer concern that
  the end of the file was cut off during security assessment.
- **Clarity:** Renamed "Reconnect strategies" section to "Reconnect methods" and
  consolidated inline comments to make each method's intent immediately clear to
  code reviewers.
- **No functional changes** — all reconnect logic, health checks, log paths, and
  user-enforcement behaviour are identical to 1.0.3.

## 1.0.3

- **Security fix:** Moved log and PID files from world-readable `/tmp/` to a
  private directory `~/.local/state/astrill-watchdog/` (XDG_STATE_HOME, mode 700).
  Addresses the ClawHub security assessment flag that logs may contain VPN
  diagnostic info (interface state, ping results) visible to other local users.
- Log file is now at `~/.local/state/astrill-watchdog/watchdog.log`
- PID file is now at `~/.local/state/astrill-watchdog/watchdog.pid`

## 1.0.2

- **Security fix:** Removed `sudo -u` fallback from `run_as_astrill()` — the
  watchdog now enforces that it runs as the same user as the Astrill process and
  logs a clear error if there is a mismatch, rather than silently escalating privileges
- **Docs:** Added explicit limitation to SKILL.md documenting that no sudo is used
  at any point and that a user mismatch results in a clean error

## 1.0.1

- **Fix:** Method 3 now uses `/autostart` argument instead of bare relaunch —
  causes Astrill to connect to last used server automatically (no auto-connect
  setting needed in the GUI)
- **Fix:** Kill pattern changed from `astrill$` to `astrill` — correctly matches
  the running process `/usr/local/Astrill/astrill /autostart`
- **Fix:** Double logging — `log()` now writes only to file (not stdout+file via tee)
- **Fix:** `ASTRILL_USER` auto-detection now uses `|| true` to prevent script exit
  under `set -euo pipefail` when Astrill is not running at startup
- **Fix:** Added `whoami` fallback for `ASTRILL_USER` when auto-detection fails
- **Add:** `setup.sh` — one-command systemd user service install (auto-start on login)
- **Add:** Per-attempt wait times (`RECONNECT_WAIT_1/2/3`) — Method 3 now waits
  45s instead of 15s to give Astrill time to fully initialise
- **Add:** Display environment variables (`DISPLAY`, `DBUS_SESSION_BUS_ADDRESS`,
  `XDG_SESSION_TYPE`) passed to Astrill on relaunch for proper GUI session
- **Add:** Orphaned instance cleanup in `cmd_stop`
- **Docs:** Added limitations, troubleshooting, and discovery notes to README

## 1.0.0

- Initial release
- Health detection via `tun0` + `ping 8.8.8.8`
- 3-attempt reconnect cascade: `/reconnect` → kill children → full restart
- Auto-detection of `ASTRILL_USER` from running process
- Background daemon with PID file
- Tested on Ubuntu 25.10 x86_64 with Astrill deb package version 3.10.0.3073
