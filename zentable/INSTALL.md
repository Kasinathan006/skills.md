# Install & Runtime Source

This ClawHub package is text-only for marketplace compatibility.

Runnable source and releases:
- GitHub repo: https://github.com/con2000us/zenTable
- Beta release: https://github.com/con2000us/zenTable/releases/tag/skillhub-zentable-beta-2026-03-01

From repository root:

```bash
python3 -m py_compile scripts/zentable_render.py

echo '{"headers":["A","B"],"rows":[["1","2"]]}' \
| python3 skills/zentable/table_renderer.py - /tmp/zt_smoke.png --theme minimal_ios_mobile --width 450
```
