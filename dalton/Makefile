SRC_FILES := $(shell find src -type f -name '*.ts' 2>/dev/null)
FRAMER_API_DTS := node_modules/framer-api/dist/index.d.ts

.PHONY: build dev test typecheck check format clean install install-dev uninstall-dev publish generate-types

.build: $(SRC_FILES) tsup.config.ts tsconfig.json package.json node_modules
	npm run build
	@touch $@

build: .build

dev:
	npm run dev

typecheck: node_modules
	npm run typecheck

test: build
	npm run test

check: node_modules
	npm run typecheck
	npm run check

format: node_modules
	npm run format

clean:
	rm -rf dist .build

node_modules: package.json
	npm install
	@touch $@

# framer-api types are installed by npm install
$(FRAMER_API_DTS): node_modules
	@test -f $@ || (echo "Missing $@, run npm install" && exit 1)

# Regenerate types-data.ts from framer-api declarations
src/types-data.ts: $(FRAMER_API_DTS) scripts/generate-types.ts node_modules
	npm run generate-types
	npm run format

generate-types: src/types-data.ts

# Install skill via npx
install:
	npx skills add framer/dalton

# Symlink development build to PATH and agent skills directories
install-dev: build
	@mkdir -p ~/.local/bin
	ln -sf "$(CURDIR)/dist/cli.js" ~/.local/bin/framer
	@mkdir -p ~/.claude/skills
	ln -sfn "$(CURDIR)/skills/framer" ~/.claude/skills/framer
	@mkdir -p ~/.cursor/skills
	ln -sfn "$(CURDIR)/skills/framer" ~/.cursor/skills/framer
	@mkdir -p ~/.codex/skills
	ln -sfn "$(CURDIR)/skills/framer" ~/.codex/skills/framer
	@mkdir -p ~/.gemini/skills
	ln -sfn "$(CURDIR)/skills/framer" ~/.gemini/skills/framer
	@mkdir -p ~/.copilot/skills
	ln -sfn "$(CURDIR)/skills/framer" ~/.copilot/skills/framer

uninstall-dev:
	rm -f ~/.local/bin/framer
	rm -f ~/.claude/skills/framer
	rm -f ~/.cursor/skills/framer
	rm -f ~/.codex/skills/framer
	rm -f ~/.gemini/skills/framer
	rm -f ~/.copilot/skills/framer

publish: build
	npm publish
