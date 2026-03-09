---
name: claude-code-security
description: Documentation on Claude Code's security safeguards, prompt injection protection, architectural foundations, and best practices. Use this skill when evaluating security risks or understanding safe usage of Claude Code.
---

# Security in Claude Code

Learn about Claude Code's security safeguards and best practices for safe usage.

## How we approach security

### Security foundation
* [Anthropic Trust Center](https://trust.anthropic.com)

### Permission-based architecture
* [Permissions documentation](https://code.claude.com/docs/en/permissions)

### Built-in protections
- **Sandboxed bash tool**: Sandbox bash commands with filesystem and network isolation, reducing permission prompts while maintaining security. Enable with `/sandbox` to define boundaries where Claude Code can work autonomously.
- **Write access restriction**: Claude Code can only write to the folder where it was started and its subfolders—it cannot modify files in parent directories without explicit permission. While Claude Code can read files outside the working directory (useful for accessing system libraries and dependencies), write operations are strictly confined to the project scope, creating a clear security boundary.
- **Prompt fatigue mitigation**: Support for allowlisting frequently used safe commands per-user, per-codebase, or per-organization.
- **Accept Edits mode**: Batch accept multiple edits while maintaining permission prompts for commands with side effects.

## Protect against prompt injection

### Core protections
- **Permission system**: Sensitive operations require explicit approval.
- **Context-aware analysis**: Detects potentially harmful instructions by analyzing the full request.
- **Input sanitization**: Prevents command injection by processing user inputs.
- **Command blocklist**: Blocks risky commands that fetch arbitrary content from the web like `curl` and `wget` by default. When explicitly allowed, be aware of permission pattern limitations.

### Privacy safeguards
- Limited retention periods for sensitive information (see the [Privacy Center](https://privacy.anthropic.com) to learn more).
- Restricted access to user session data.
- User control over data training preferences. Consumer users can change their privacy settings at any time.

### Additional safeguards
- **Network request approval**: Tools that make network requests require user approval by default.
- **Isolated context windows**: Web fetch uses a separate context window to avoid injecting potentially malicious prompts.
- **Trust verification**: First-time codebase runs and new MCP servers require trust verification. *Note: Trust verification is disabled when running non-interactively with the `-p` flag.*
- **Command injection detection**: Suspicious bash commands require manual approval even if previously allowlisted.
- **Fail-closed matching**: Unmatched commands default to requiring manual approval.
- **Natural language descriptions**: Complex bash commands include explanations for user understanding.
- **Secure credential storage**: API keys and tokens are encrypted.

## Environment Security

### IDE security
* [VS Code security and privacy](https://code.claude.com/docs/en/vs-code#security-and-privacy)

### Cloud execution security
- **Isolated virtual machines**: Each cloud session runs in an isolated, Anthropic-managed VM.
- **Network access controls**: Network access is limited by default and can be configured to be disabled or allow only specific domains.
- **Credential protection**: Authentication is handled through a secure proxy that uses a scoped credential inside the sandbox, which is then translated to your actual GitHub authentication token.
- **Branch restrictions**: Git push operations are restricted to the current working branch.
- **Audit logging**: All operations in cloud environments are logged for compliance and audit purposes.
- **Automatic cleanup**: Cloud environments are automatically terminated after session completion.

## Security best practices

### Working with sensitive code
1. Review all suggested commands before approval.
2. Avoid piping untrusted content directly to Claude.
3. Verify proposed changes to critical files.
4. Use project-specific permission settings for sensitive repositories.
5. Consider using [devcontainers](https://code.claude.com/docs/en/devcontainer) for additional isolation.
6. Use virtual machines (VMs) to run scripts and make tool calls, especially when interacting with external web services.
7. Regularly audit your permission settings with `/permissions`.
8. Report suspicious behavior with `/bug`.

### Team security
- Use managed settings to enforce organizational standards.
- Share approved permission configurations through version control.
- Train team members on security best practices.
- Monitor Claude Code usage through OpenTelemetry metrics.
- Audit or block settings changes during sessions with `ConfigChange` hooks.

### Reporting security issues
1. Do not disclose it publicly.
2. Report it through the [HackerOne program](https://hackerone.com/anthropic-vdp).
3. Include detailed reproduction steps.
4. Allow time for the issue to be addressed before public disclosure.

---
**Related Resources:**
* [Sandboxing](https://code.claude.com/docs/en/sandboxing)
* [Monitoring Usage](https://code.claude.com/docs/en/monitoring-usage)
* [Devcontainers](https://code.claude.com/docs/en/devcontainer)
