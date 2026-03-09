import "morgan"

import "morgan"

declare module "morgan" {
	namespace morgan {
		interface Options<Request, Response> {
			getMetadata?(req: Request, res: Response): Record<string, string>
		}

		interface StreamOptions {
			write(str: string, metadata?: Record<string, string>): void
		}
	}
}

declare module "@framerjs/morgan" {
	export = require("morgan")
}
