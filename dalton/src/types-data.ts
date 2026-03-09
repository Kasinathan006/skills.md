// Auto-generated from framer-api declaration file. Do not edit manually.
// Run: npx tsx scripts/generate-types.ts

export interface TypeMember {
	name: string;
	type: string;
	description: string;
	optional: boolean;
}

export interface TypeInfo {
	name: string;
	description: string;
	kind: "interface" | "alias";
	members?: TypeMember[];
	extends?: string[];
	alias?: string;
	references: string[];
}

export interface MethodInfo {
	name: string;
	category: string;
	signature: string;
	description: string;
	references: string[];
}

export interface ClassInfo {
	name: string;
	description: string;
}

export const types: Record<string, TypeInfo> = {
	addcomponentinstanceoptions: {
		name: "AddComponentInstanceOptions",
		description: "",
		kind: "interface",
		references: ["EditableComponentInstanceNodeAttributes"],
		members: [
			{
				name: "url",
				type: "string",
				description:
					"The component module URL. Can be copied from the components panel.",
				optional: false,
			},
			{
				name: "attributes",
				type: "Partial<EditableComponentInstanceNodeAttributes>",
				description: "Optional component attributes.",
				optional: true,
			},
			{
				name: "parentId",
				type: "string",
				description:
					"Optional parent node ID where the component instance should be inserted.\nIf not provided, the component will be inserted at the default location based on the current selection.\n\n@alpha",
				optional: true,
			},
		],
	},
	adddetachedcomponentlayersoptions: {
		name: "AddDetachedComponentLayersOptions",
		description: "",
		kind: "interface",
		references: ["EditableComponentInstanceNodeAttributes"],
		members: [
			{
				name: "url",
				type: "string",
				description:
					"The component module URL. Can be copied from the components panel.",
				optional: false,
			},
			{
				name: "attributes",
				type: "Partial<EditableComponentInstanceNodeAttributes>",
				description: "Optional component attributes.",
				optional: true,
			},
			{
				name: "layout",
				type: "boolean",
				description:
					"Insert the layers as a layout block and match variants with breakpoints.",
				optional: true,
			},
		],
	},
	addtextoptions: {
		name: "AddTextOptions",
		description: "",
		kind: "interface",
		references: ["TextNodeTag"],
		members: [
			{
				name: "tag",
				type: "TextNodeTag",
				description: "",
				optional: false,
			},
		],
	},
	aiserviceinfo: {
		name: "AiServiceInfo",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "endpoint",
				type: "string",
				description: "",
				optional: false,
			},
			{
				name: "token",
				type: "string",
				description: "",
				optional: false,
			},
			{
				name: "expiresAt",
				type: "string",
				description: "",
				optional: false,
			},
		],
	},
	allmethods: {
		name: "AllMethods",
		description: "",
		kind: "alias",
		alias:
			"keyof {\n    [K in Method as (typeof methodToMessageTypes)[K] extends [] ? never : K]: (typeof methodToMessageTypes)[K];\n}",
		references: [],
	},
	anyeditableattributes: {
		name: "AnyEditableAttributes",
		description: "",
		kind: "interface",
		references: [
			"EditableFrameNodeAttributes",
			"EditableTextNodeAttributes",
			"EditableSVGNodeAttributes",
			"EditableComponentInstanceNodeAttributes",
			"EditableComponentNodeAttributes",
			"EditableWebPageNodeAttributes",
			"EditableDesignPageNodeAttributes",
		],
		extends: [
			"EditableFrameNodeAttributes",
			"EditableTextNodeAttributes",
			"EditableSVGNodeAttributes",
			"EditableComponentInstanceNodeAttributes",
			"EditableComponentNodeAttributes",
			"EditableWebPageNodeAttributes",
			"EditableDesignPageNodeAttributes",
		],
	},
	anynode: {
		name: "AnyNode",
		description: "",
		kind: "alias",
		alias: "CanvasNode | CanvasRootNode",
		references: ["CanvasNode", "CanvasRootNode"],
	},
	apiversion1projectinfo: {
		name: "ApiVersion1ProjectInfo",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "name",
				type: "string",
				description: "",
				optional: false,
			},
			{
				name: "id",
				type: "string",
				description: "Hashed project id",
				optional: false,
			},
		],
	},
	apiversion1user: {
		name: "ApiVersion1User",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "name",
				type: "string",
				description: "",
				optional: false,
			},
			{
				name: "id",
				type: "string",
				description: "Hashed user id",
				optional: false,
			},
		],
	},
	arraycontrol: {
		name: "ArrayControl",
		description: "",
		kind: "alias",
		alias: "ArrayControlHelper",
		references: ["ArrayControlHelper"],
	},
	arraycontrolhelper: {
		name: "ArrayControlHelper",
		description: "",
		kind: "alias",
		alias: "T extends unknown ? ArrayControlBase<T> : never",
		references: [],
	},
	arrayfieldbase: {
		name: "ArrayFieldBase",
		description: "",
		kind: "interface",
		references: ["ArrayFieldType"],
		members: [
			{
				name: "type",
				type: "ArrayFieldType",
				description: "",
				optional: false,
			},
		],
	},
	arrayfielddataentry: {
		name: "ArrayFieldDataEntry",
		description: "",
		kind: "interface",
		references: ["ArrayFieldType", "ArrayItem"],
		members: [
			{
				name: "type",
				type: "ArrayFieldType",
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "ArrayItem[]",
				description: "",
				optional: false,
			},
		],
	},
	arrayfielddataentryinput: {
		name: "ArrayFieldDataEntryInput",
		description: "",
		kind: "interface",
		references: ["ArrayFieldType", "ArrayItemInput"],
		members: [
			{
				name: "type",
				type: "ArrayFieldType",
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "ArrayItemInput[]",
				description: "",
				optional: false,
			},
		],
	},
	arrayfielddefinitiondata: {
		name: "ArrayFieldDefinitionData",
		description: "",
		kind: "interface",
		references: [
			"ArrayFieldBase",
			"WithFieldRequired",
			"FieldDefinitionBase",
			"ArrayItemFieldDefinitionData",
		],
		members: [
			{
				name: "fields",
				type: "[ArrayItemFieldDefinitionData]",
				description: "",
				optional: false,
			},
		],
		extends: ["ArrayFieldBase", "WithFieldRequired", "FieldDefinitionBase"],
	},
	arrayfieldtype: {
		name: "ArrayFieldType",
		description: "",
		kind: "alias",
		alias: '"array"',
		references: [],
	},
	arrayitem: {
		name: "ArrayItem",
		description: "",
		kind: "interface",
		references: ["ArrayItemFieldData"],
		members: [
			{
				name: "id",
				type: "string",
				description: "",
				optional: false,
			},
			{
				name: "fieldData",
				type: "Readonly<ArrayItemFieldData>",
				description: "",
				optional: false,
			},
		],
	},
	arrayitemfield: {
		name: "ArrayItemField",
		description: "",
		kind: "alias",
		alias: "ImageField",
		references: ["ImageField"],
	},
	arrayitemfieldbase: {
		name: "ArrayItemFieldBase",
		description: "",
		kind: "alias",
		alias: "ImageFieldBase",
		references: ["ImageFieldBase"],
	},
	arrayitemfielddata: {
		name: "ArrayItemFieldData",
		description: "",
		kind: "alias",
		alias: "Record<string, ArrayItemFieldDataEntry>",
		references: ["ArrayItemFieldDataEntry"],
	},
	arrayitemfielddataentry: {
		name: "ArrayItemFieldDataEntry",
		description: "",
		kind: "alias",
		alias: "ImageFieldDataEntry",
		references: ["ImageFieldDataEntry"],
	},
	arrayitemfielddataentryinput: {
		name: "ArrayItemFieldDataEntryInput",
		description: "",
		kind: "alias",
		alias: "ImageFieldDataEntryInput",
		references: ["ImageFieldDataEntryInput"],
	},
	arrayitemfielddatainput: {
		name: "ArrayItemFieldDataInput",
		description: "",
		kind: "alias",
		alias: "Record<string, ArrayItemFieldDataEntryInput>",
		references: ["ArrayItemFieldDataEntryInput"],
	},
	arrayitemfielddefinitiondata: {
		name: "ArrayItemFieldDefinitionData",
		description: "",
		kind: "interface",
		references: [
			"ArrayItemFieldBase",
			"WithFieldRequired",
			"FieldDefinitionBase",
		],
		extends: ["ArrayItemFieldBase", "WithFieldRequired", "FieldDefinitionBase"],
	},
	arrayiteminput: {
		name: "ArrayItemInput",
		description: "",
		kind: "alias",
		alias: "CreateArrayItem | UpdateArrayItem",
		references: ["CreateArrayItem", "UpdateArrayItem"],
	},
	assetdata: {
		name: "AssetData",
		description: "",
		kind: "interface",
		references: ["WithOptionalName"],
		members: [
			{
				name: "url",
				type: "string",
				description:
					"Something that can be rendered within the iFrame. Always the original size of the image",
				optional: false,
			},
		],
		extends: ["WithOptionalName"],
	},
	assetdatatransfer: {
		name: "AssetDataTransfer",
		description: "",
		kind: "alias",
		alias: "AssetURLDataTransfer | BytesDataTransfer",
		references: ["AssetURLDataTransfer", "BytesDataTransfer"],
	},
	assetid: {
		name: "AssetId",
		description: "",
		kind: "alias",
		alias: "string",
		references: [],
	},
	assetidentifier: {
		name: "AssetIdentifier",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "id",
				type: "string",
				description: "",
				optional: false,
			},
		],
	},
	assetinput: {
		name: "AssetInput",
		description: "",
		kind: "alias",
		alias: "string | File | BytesData",
		references: ["File", "BytesData"],
	},
	assetpath: {
		name: "AssetPath",
		description: "",
		kind: "alias",
		alias: "WithAssetName | WithAssetPath",
		references: ["WithAssetName", "WithAssetPath"],
	},
	asseturldatatransfer: {
		name: "AssetURLDataTransfer",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "type",
				type: '"url"',
				description: "",
				optional: false,
			},
			{
				name: "url",
				type: "string",
				description: "",
				optional: false,
			},
		],
	},
	axisoverflow: {
		name: "AxisOverflow",
		description: "",
		kind: "alias",
		alias: "Overflow",
		references: ["Overflow"],
	},
	basecollectionitemdata: {
		name: "BaseCollectionItemData",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "draft",
				type: "boolean | undefined",
				description: "Drafts are excluded from publishing.",
				optional: true,
			},
		],
	},
	basegradientdata: {
		name: "BaseGradientData",
		description: "",
		kind: "interface",
		references: ["ColorStopData"],
		members: [
			{
				name: "stops",
				type: "readonly ColorStopData[]",
				description: "",
				optional: false,
			},
		],
	},
	basevariabledata: {
		name: "BaseVariableData",
		description: "",
		kind: "interface",
		references: [
			"WithNodeId",
			"WithNodeType",
			"WithId",
			"WithName",
			"ExplicitPartial",
		],
		extends: [
			"WithNodeId",
			"WithNodeType",
			"WithId",
			"WithName",
			"ExplicitPartial",
		],
	},
	booleancontrol: {
		name: "BooleanControl",
		description: "",
		kind: "interface",
		references: ["ControlBase", "BooleanVariable", "UnsupportedComputedValue"],
		members: [
			{
				name: "type",
				type: '"boolean"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "boolean | BooleanVariable | UnsupportedComputedValue | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	booleanfieldbase: {
		name: "BooleanFieldBase",
		description: "",
		kind: "interface",
		references: ["BooleanFieldType"],
		members: [
			{
				name: "type",
				type: "BooleanFieldType",
				description: "",
				optional: false,
			},
		],
	},
	booleanfielddataentry: {
		name: "BooleanFieldDataEntry",
		description: "",
		kind: "interface",
		references: ["BooleanFieldType"],
		members: [
			{
				name: "type",
				type: "BooleanFieldType",
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "boolean",
				description: "",
				optional: false,
			},
		],
	},
	booleanfielddataentryinput: {
		name: "BooleanFieldDataEntryInput",
		description: "",
		kind: "alias",
		alias: "BooleanFieldDataEntry",
		references: ["BooleanFieldDataEntry"],
	},
	booleanfielddefinitiondata: {
		name: "BooleanFieldDefinitionData",
		description: "",
		kind: "interface",
		references: ["BooleanFieldBase", "FieldDefinitionBase"],
		extends: ["BooleanFieldBase", "FieldDefinitionBase"],
	},
	booleanfieldtype: {
		name: "BooleanFieldType",
		description: "",
		kind: "alias",
		alias: '"boolean"',
		references: [],
	},
	booleanvariabledata: {
		name: "BooleanVariableData",
		description: "",
		kind: "interface",
		references: [
			"WithBooleanVariableClass",
			"BaseVariableData",
			"WithBooleanDefaultValue",
		],
		extends: [
			"WithBooleanVariableClass",
			"BaseVariableData",
			"WithBooleanDefaultValue",
		],
	},
	border: {
		name: "Border",
		description: "",
		kind: "interface",
		references: ["BorderWidth", "ColorStyle", "BorderStyle"],
		members: [
			{
				name: "width",
				type: "BorderWidth",
				description: "",
				optional: false,
			},
			{
				name: "color",
				type: "ColorStyle | string",
				description: "",
				optional: false,
			},
			{
				name: "style",
				type: "BorderStyle",
				description: "",
				optional: false,
			},
		],
	},
	bordercontrol: {
		name: "BorderControl",
		description: "",
		kind: "interface",
		references: ["ControlBase", "Border", "BorderVariable"],
		members: [
			{
				name: "type",
				type: '"border"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "Border | BorderVariable | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	borderradius: {
		name: "BorderRadius",
		description: "",
		kind: "alias",
		alias:
			"CSSDimension<CSSUnit.Percentage | CSSUnit.Pixel> | `${CSSDimension<CSSUnit.Pixel>} ${CSSDimension<CSSUnit.Pixel>} ${CSSDimension<CSSUnit.Pixel>} ${CSSDimension<CSSUnit.Pixel>}` | null",
		references: ["CSSDimension", "CSSUnit.Percentage", "CSSUnit.Pixel"],
	},
	borderradiuscontrol: {
		name: "BorderRadiusControl",
		description: "",
		kind: "interface",
		references: [
			"ControlBase",
			"RelativeOrFourPixelNumberShorthand",
			"UnsupportedVariable",
			"NumberVariable",
			"UnsupportedComputedValue",
		],
		members: [
			{
				name: "type",
				type: '"borderRadius"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "RelativeOrFourPixelNumberShorthand | UnsupportedVariable | NumberVariable | UnsupportedComputedValue | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	borderstyle: {
		name: "BorderStyle",
		description: "",
		kind: "alias",
		alias: '"solid" | "dashed" | "dotted" | "double"',
		references: [],
	},
	bordervariabledata: {
		name: "BorderVariableData",
		description: "",
		kind: "interface",
		references: [
			"WithBorderVariableClass",
			"BaseVariableData",
			"ExplicitPartial",
		],
		extends: ["WithBorderVariableClass", "BaseVariableData", "ExplicitPartial"],
	},
	borderwidth: {
		name: "BorderWidth",
		description: "",
		kind: "alias",
		alias:
			"CSSDimension<CSSUnit.Pixel> | `${CSSDimension<CSSUnit.Pixel>} ${CSSDimension<CSSUnit.Pixel>} ${CSSDimension<CSSUnit.Pixel>} ${CSSDimension<CSSUnit.Pixel>}`",
		references: ["CSSDimension", "CSSUnit.Pixel"],
	},
	breakpoint: {
		name: "Breakpoint",
		description: "@alpha",
		kind: "interface",
		references: [],
		members: [
			{
				name: "name",
				type: "string",
				description: "Name of the breakpoint as displayed on the node",
				optional: false,
			},
			{
				name: "width",
				type: "number",
				description: "Width of the breakpoint in pixels",
				optional: false,
			},
			{
				name: "viewportHeight",
				type: "number",
				description:
					"The height of the viewport in pixels. This is an optional value that is used for correctly\ndisplaying fixed positioned elements on the canvas.",
				optional: true,
			},
		],
	},
	bytesdata: {
		name: "BytesData",
		description: "",
		kind: "interface",
		references: ["ArrayBuffer"],
		members: [
			{
				name: "bytes",
				type: "Uint8Array<ArrayBuffer>",
				description: "",
				optional: false,
			},
			{
				name: "mimeType",
				type: "string",
				description: "",
				optional: false,
			},
		],
	},
	bytesdatatransfer: {
		name: "BytesDataTransfer",
		description: "",
		kind: "alias",
		alias: 'BytesData & {\n    type: "bytes";\n}',
		references: ["BytesData"],
	},
	canvasnode: {
		name: "CanvasNode",
		description: "",
		kind: "alias",
		alias:
			"FrameNode | TextNode | ComponentInstanceNode | SVGNode | VectorSetItemNode | UnknownNode",
		references: [
			"FrameNode",
			"TextNode",
			"ComponentInstanceNode",
			"SVGNode",
			"VectorSetItemNode",
			"UnknownNode",
		],
	},
	canvasrootnode: {
		name: "CanvasRootNode",
		description: "",
		kind: "alias",
		alias:
			"WebPageNode | DesignPageNode | ComponentNode | VectorSetNode | UnknownNode",
		references: [
			"WebPageNode",
			"DesignPageNode",
			"ComponentNode",
			"VectorSetNode",
			"UnknownNode",
		],
	},
	classkey: {
		name: "ClassKey",
		description: "",
		kind: "alias",
		alias: '"__class"',
		references: [],
	},
	cleanup: {
		name: "Cleanup",
		description: "",
		kind: "alias",
		alias: "VoidFunction",
		references: ["VoidFunction"],
	},
	closepluginoptions: {
		name: "ClosePluginOptions",
		description: "",
		kind: "interface",
		references: ["NotificationVariant"],
		members: [
			{
				name: "variant",
				type: "NotificationVariant",
				description: "",
				optional: true,
			},
			{
				name: "silent",
				type: "boolean",
				description: "When true, closes the plugin without showing a toast.",
				optional: true,
			},
		],
	},
	codeexportcommon: {
		name: "CodeExportCommon",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "name",
				type: "string",
				description: "The export name.",
				optional: false,
			},
			{
				name: "isDefaultExport",
				type: "boolean",
				description: "Whether this is the default export of the file.",
				optional: false,
			},
		],
	},
	codefilecomponentexport: {
		name: "CodeFileComponentExport",
		description: "A component export from a code file.",
		kind: "interface",
		references: ["CodeExportCommon"],
		members: [
			{
				name: "insertURL",
				type: "string",
				description:
					"URL that can be used with `addComponentInstance` to insert this export onto the canvas.",
				optional: false,
			},
			{
				name: "type",
				type: '"component"',
				description: "Discriminator indicating this is a component export.",
				optional: false,
			},
		],
		extends: ["CodeExportCommon"],
	},
	codefileexport: {
		name: "CodeFileExport",
		description:
			"Union of possible code file export types: component or override.",
		kind: "alias",
		alias: "CodeFileComponentExport | CodeFileOverrideExport",
		references: ["CodeFileComponentExport", "CodeFileOverrideExport"],
	},
	codefileoverrideexport: {
		name: "CodeFileOverrideExport",
		description: "An override export from a code file.",
		kind: "interface",
		references: ["CodeExportCommon"],
		members: [
			{
				name: "type",
				type: '"override"',
				description: "Discriminator indicating this is an override export.",
				optional: false,
			},
		],
		extends: ["CodeExportCommon"],
	},
	codefileposition: {
		name: "CodeFilePosition",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "startLine",
				type: "number",
				description: "Start line number (1-based)",
				optional: false,
			},
			{
				name: "startColumn",
				type: "number",
				description: "Start column number (1-based)",
				optional: true,
			},
			{
				name: "endLine",
				type: "number",
				description: "End line number (1-based)",
				optional: true,
			},
			{
				name: "endColumn",
				type: "number",
				description: "End column number (1-based)",
				optional: true,
			},
		],
	},
	collectioniteminput: {
		name: "CollectionItemInput",
		description: "",
		kind: "alias",
		alias: "CreateCollectionItem | EditableCollectionItemAttributesWithId",
		references: [
			"CreateCollectionItem",
			"EditableCollectionItemAttributesWithId",
		],
	},
	collectionmanagedby: {
		name: "CollectionManagedBy",
		description: "",
		kind: "alias",
		alias: '"user" | ManagedCollectionManagedBy',
		references: ["ManagedCollectionManagedBy"],
	},
	collectionreferencecontrol: {
		name: "CollectionReferenceControl",
		description: "",
		kind: "interface",
		references: ["ControlBase", "UnsupportedVariable"],
		members: [
			{
				name: "type",
				type: '"collectionReference"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "string | UnsupportedVariable | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	collectionreferencefieldbase: {
		name: "CollectionReferenceFieldBase",
		description: "",
		kind: "interface",
		references: ["CollectionReferenceFieldType"],
		members: [
			{
				name: "type",
				type: "CollectionReferenceFieldType",
				description: "",
				optional: false,
			},
		],
	},
	collectionreferencefielddataentry: {
		name: "CollectionReferenceFieldDataEntry",
		description: "",
		kind: "interface",
		references: ["CollectionReferenceFieldType"],
		members: [
			{
				name: "type",
				type: "CollectionReferenceFieldType",
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "string | undefined",
				description: "",
				optional: false,
			},
		],
	},
	collectionreferencefielddataentryinput: {
		name: "CollectionReferenceFieldDataEntryInput",
		description: "",
		kind: "interface",
		references: ["CollectionReferenceFieldType"],
		members: [
			{
				name: "type",
				type: "CollectionReferenceFieldType",
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "string | null",
				description: "",
				optional: false,
			},
		],
	},
	collectionreferencefielddefinitiondata: {
		name: "CollectionReferenceFieldDefinitionData",
		description: "",
		kind: "interface",
		references: [
			"CollectionReferenceFieldBase",
			"FieldDefinitionBase",
			"WithFieldCollectionId",
			"WithFieldRequired",
		],
		extends: [
			"CollectionReferenceFieldBase",
			"FieldDefinitionBase",
			"WithFieldCollectionId",
			"WithFieldRequired",
		],
	},
	collectionreferencefieldtype: {
		name: "CollectionReferenceFieldType",
		description: "",
		kind: "alias",
		alias: '"collectionReference"',
		references: [],
	},
	colorcontrol: {
		name: "ColorControl",
		description: "",
		kind: "interface",
		references: [
			"ControlBase",
			"ColorStyle",
			"ColorVariable",
			"UnsupportedComputedValue",
		],
		members: [
			{
				name: "type",
				type: '"color"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "string | ColorStyle | ColorVariable | UnsupportedComputedValue | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	colorfieldbase: {
		name: "ColorFieldBase",
		description: "",
		kind: "interface",
		references: ["ColorFieldType"],
		members: [
			{
				name: "type",
				type: "ColorFieldType",
				description: "",
				optional: false,
			},
		],
	},
	colorfielddataentry: {
		name: "ColorFieldDataEntry",
		description: "",
		kind: "interface",
		references: ["ColorFieldType", "ColorStyle"],
		members: [
			{
				name: "type",
				type: "ColorFieldType",
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "string | ColorStyle",
				description: "",
				optional: false,
			},
		],
	},
	colorfielddataentryinput: {
		name: "ColorFieldDataEntryInput",
		description: "",
		kind: "interface",
		references: ["ColorFieldType", "ColorStyleData"],
		members: [
			{
				name: "type",
				type: "ColorFieldType",
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "string | ColorStyleData | null",
				description: "",
				optional: false,
			},
		],
	},
	colorfielddefinitiondata: {
		name: "ColorFieldDefinitionData",
		description: "",
		kind: "interface",
		references: ["ColorFieldBase", "FieldDefinitionBase"],
		extends: ["ColorFieldBase", "FieldDefinitionBase"],
	},
	colorfieldtype: {
		name: "ColorFieldType",
		description: "",
		kind: "alias",
		alias: '"color"',
		references: [],
	},
	colorstop: {
		name: "ColorStop",
		description: "",
		kind: "interface",
		references: ["ColorStyle"],
		members: [
			{
				name: "color",
				type: "ColorStyle | string",
				description: "CSS color",
				optional: false,
			},
			{
				name: "position",
				type: "number",
				description: "0-1",
				optional: false,
			},
		],
	},
	colorstopdata: {
		name: "ColorStopData",
		description: "",
		kind: "interface",
		references: ["ColorStyleData"],
		members: [
			{
				name: "color",
				type: "ColorStyleData | string",
				description: "",
				optional: false,
			},
			{
				name: "position",
				type: "number",
				description: "",
				optional: false,
			},
		],
	},
	colorstyleattributes: {
		name: "ColorStyleAttributes",
		description: "",
		kind: "alias",
		alias:
			"Prettify<RequiredColorStyleAttributes & Partial<OptionalColorStyleAttributes> & AssetPath>",
		references: [
			"Prettify",
			"RequiredColorStyleAttributes",
			"OptionalColorStyleAttributes",
			"AssetPath",
		],
	},
	colorstyledata: {
		name: "ColorStyleData",
		description: "",
		kind: "interface",
		references: [
			"RequiredColorStyleAttributes",
			"OptionalColorStyleAttributes",
		],
		members: [
			{
				name: "[classKey]",
				type: "typeof colorStyleDiscriminator",
				description: "",
				optional: false,
			},
			{
				name: "id",
				type: "NodeId",
				description: "",
				optional: false,
			},
			{
				name: "name",
				type: "string",
				description: "",
				optional: false,
			},
			{
				name: "path",
				type: "string",
				description: "",
				optional: false,
			},
		],
		extends: ["RequiredColorStyleAttributes", "OptionalColorStyleAttributes"],
	},
	colorvariabledata: {
		name: "ColorVariableData",
		description: "",
		kind: "interface",
		references: [
			"WithColorVariableClass",
			"BaseVariableData",
			"WithColorDefaultValueData",
		],
		extends: [
			"WithColorVariableClass",
			"BaseVariableData",
			"WithColorDefaultValueData",
		],
	},
	componentinstanceplaceholderattributes: {
		name: "ComponentInstancePlaceholderAttributes",
		description: "@alpha",
		kind: "alias",
		alias: 'Partial<Omit<ComponentInstancePlaceholderData, "id">>',
		references: ["ComponentInstancePlaceholderData"],
	},
	componentinstanceplaceholderdata: {
		name: "ComponentInstancePlaceholderData",
		description: "@alpha",
		kind: "interface",
		references: [],
		members: [
			{
				name: "id",
				type: "string",
				description: "",
				optional: false,
			},
			{
				name: "width",
				type: "number",
				description: "",
				optional: false,
			},
			{
				name: "height",
				type: "number",
				description: "",
				optional: false,
			},
			{
				name: "title",
				type: "string",
				description: "",
				optional: false,
			},
			{
				name: "codePreview",
				type: "string | null",
				description: "",
				optional: false,
			},
		],
	},
	componentvariable: {
		name: "ComponentVariable",
		description: "",
		kind: "alias",
		alias:
			"BooleanVariable | NumberVariable | StringVariable | FormattedTextVariable | EnumVariable | ColorVariable | ImageVariable | FileVariable | LinkVariable | DateVariable | BorderVariable | UnsupportedVariable",
		references: [
			"BooleanVariable",
			"NumberVariable",
			"StringVariable",
			"FormattedTextVariable",
			"EnumVariable",
			"ColorVariable",
			"ImageVariable",
			"FileVariable",
			"LinkVariable",
			"DateVariable",
			"BorderVariable",
			"UnsupportedVariable",
		],
	},
	conicgradientdata: {
		name: "ConicGradientData",
		description: "",
		kind: "interface",
		references: [
			"BaseGradientData",
			"ConicGradientType",
			"CSSDimension",
			"CSSUnit.Percentage",
		],
		members: [
			{
				name: "[classKey]",
				type: "ConicGradientType",
				description: "",
				optional: false,
			},
			{
				name: "angle",
				type: "number",
				description: "",
				optional: false,
			},
			{
				name: "x",
				type: "CSSDimension<CSSUnit.Percentage>",
				description: "",
				optional: false,
			},
			{
				name: "y",
				type: "CSSDimension<CSSUnit.Percentage>",
				description: "",
				optional: false,
			},
		],
		extends: ["BaseGradientData"],
	},
	conicgradienttype: {
		name: "ConicGradientType",
		description: "",
		kind: "alias",
		alias: '"ConicGradient"',
		references: [],
	},
	contenttype: {
		name: "ContentType",
		description: "Controls how formatted text content is processed",
		kind: "alias",
		alias: '"auto" | "markdown" | "html"',
		references: [],
	},
	contextmenuconfig: {
		name: "ContextMenuConfig",
		description: "Configuration for positioning and sizing a context menu.",
		kind: "interface",
		references: ["MenuPlacement"],
		members: [
			{
				name: "location",
				type: "{\n        x: number;\n        y: number;\n    }",
				description: "Coordinates of the anchor point.",
				optional: false,
			},
			{
				name: "placement",
				type: "MenuPlacement",
				description: "Placement of the menu relative to the anchor point.",
				optional: true,
			},
			{
				name: "width",
				type: "number",
				description:
					"Sets fixed width for the menu. If not set, the menu width is based on the content.",
				optional: true,
			},
		],
	},
	control: {
		name: "Control",
		description: "",
		kind: "alias",
		alias:
			"EnumControl | BooleanControl | BorderControl | ShadowControl | DateControl | NumberControl | TransitionControl | StringControl | ColorControl | FormattedTextControl | LinkControl | LinkRelControl | FontControl | PageScopeControl | ScrollSectionControl | CustomCursorControl | CursorControl | FileControl | GapControl | PaddingControl | BorderRadiusControl | CollectionReferenceControl | MultiCollectionReferenceControl | VectorSetItemControl | TrackingIdControl | ImageControl | FusedNumberControl | ObjectControl | ArrayControl | EventHandlerControl | SlotControl | LocationControl",
		references: [
			"EnumControl",
			"BooleanControl",
			"BorderControl",
			"ShadowControl",
			"DateControl",
			"NumberControl",
			"TransitionControl",
			"StringControl",
			"ColorControl",
			"FormattedTextControl",
			"LinkControl",
			"LinkRelControl",
			"FontControl",
			"PageScopeControl",
			"ScrollSectionControl",
			"CustomCursorControl",
			"CursorControl",
			"FileControl",
			"GapControl",
			"PaddingControl",
			"BorderRadiusControl",
			"CollectionReferenceControl",
			"MultiCollectionReferenceControl",
			"VectorSetItemControl",
			"TrackingIdControl",
			"ImageControl",
			"FusedNumberControl",
			"ObjectControl",
			"ArrayControl",
			"EventHandlerControl",
			"SlotControl",
			"LocationControl",
		],
	},
	controlattributes: {
		name: "ControlAttributes",
		description: "",
		kind: "alias",
		alias: "Record<string, unknown>",
		references: [],
	},
	controlbase: {
		name: "ControlBase",
		description: "",
		kind: "interface",
		references: ["WithKey"],
		extends: ["WithKey", "Partial", "Partial"],
	},
	coordinate: {
		name: "Coordinate",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "latitude",
				type: "number",
				description: "",
				optional: false,
			},
			{
				name: "longitude",
				type: "number",
				description: "",
				optional: false,
			},
		],
	},
	createarrayfield: {
		name: "CreateArrayField",
		description: "",
		kind: "interface",
		references: [
			"ArrayFieldBase",
			"CreateFieldBase",
			"WithOptionalFieldRequired",
			"CreateArrayItemField",
		],
		members: [
			{
				name: "fields",
				type: "[CreateArrayItemField]",
				description: "",
				optional: false,
			},
		],
		extends: ["ArrayFieldBase", "CreateFieldBase", "WithOptionalFieldRequired"],
	},
	createarrayitem: {
		name: "CreateArrayItem",
		description: "",
		kind: "interface",
		references: ["ArrayItemFieldDataInput"],
		members: [
			{
				name: "fieldData",
				type: "ArrayItemFieldDataInput | undefined",
				description: "Data for the fields.",
				optional: false,
			},
		],
	},
	createarrayitemfield: {
		name: "CreateArrayItemField",
		description: "",
		kind: "interface",
		references: [
			"ArrayItemFieldBase",
			"CreateFieldBase",
			"WithOptionalFieldRequired",
		],
		extends: [
			"ArrayItemFieldBase",
			"CreateFieldBase",
			"WithOptionalFieldRequired",
		],
	},
	createbooleanfield: {
		name: "CreateBooleanField",
		description: "",
		kind: "interface",
		references: ["BooleanFieldBase", "CreateFieldBase"],
		extends: ["BooleanFieldBase", "CreateFieldBase"],
	},
	createbooleanvariable: {
		name: "CreateBooleanVariable",
		description: "",
		kind: "interface",
		references: ["WithBooleanVariableType", "CreateVariableBase"],
		extends: ["WithBooleanVariableType", "CreateVariableBase", "Partial"],
	},
	createbordervariable: {
		name: "CreateBorderVariable",
		description: "",
		kind: "interface",
		references: ["WithBorderVariableType", "CreateVariableBase"],
		extends: ["WithBorderVariableType", "CreateVariableBase", "Partial"],
	},
	createcollectionitem: {
		name: "CreateCollectionItem",
		description: "",
		kind: "interface",
		references: [
			"BaseCollectionItemData",
			"LocalizationSourceUpdate",
			"FieldDataInput",
			"LocalizationGroupStatusByLocale",
		],
		members: [
			{
				name: "id",
				type: "undefined",
				description: "The ID of an existing item if updating. Omit if adding.",
				optional: true,
			},
			{
				name: "slug",
				type: "string",
				description:
					"Unique on collection level. Required if adding, optional if updating.",
				optional: false,
			},
			{
				name: "slugByLocale",
				type: "LocalizationSourceUpdate",
				description: "Localized values for the slug",
				optional: true,
			},
			{
				name: "fieldData",
				type: "FieldDataInput | undefined",
				description: "Data for the fields.",
				optional: true,
			},
			{
				name: "statusByLocale",
				type: "LocalizationGroupStatusByLocale",
				description:
					"Status of each locale for the resulting localization  group",
				optional: true,
			},
		],
		extends: ["BaseCollectionItemData"],
	},
	createcollectionreferencefield: {
		name: "CreateCollectionReferenceField",
		description: "",
		kind: "interface",
		references: [
			"CollectionReferenceFieldBase",
			"CreateFieldBase",
			"WithFieldCollectionId",
			"WithOptionalFieldRequired",
		],
		extends: [
			"CollectionReferenceFieldBase",
			"CreateFieldBase",
			"WithFieldCollectionId",
			"WithOptionalFieldRequired",
		],
	},
	createcolorfield: {
		name: "CreateColorField",
		description: "",
		kind: "interface",
		references: ["ColorFieldBase", "CreateFieldBase"],
		extends: ["ColorFieldBase", "CreateFieldBase"],
	},
	createcolorvariable: {
		name: "CreateColorVariable",
		description: "",
		kind: "interface",
		references: ["WithColorVariableType", "CreateVariableBase"],
		extends: ["WithColorVariableType", "CreateVariableBase", "Partial"],
	},
	createdatefield: {
		name: "CreateDateField",
		description: "",
		kind: "interface",
		references: [
			"DateFieldBase",
			"CreateFieldBase",
			"WithOptionalFieldRequired",
		],
		extends: ["DateFieldBase", "CreateFieldBase", "WithOptionalFieldRequired"],
	},
	createdatevariable: {
		name: "CreateDateVariable",
		description: "",
		kind: "interface",
		references: ["WithDateVariableType", "CreateVariableBase"],
		extends: [
			"WithDateVariableType",
			"CreateVariableBase",
			"Partial",
			"Partial",
		],
	},
	createenumcase: {
		name: "CreateEnumCase",
		description: "",
		kind: "interface",
		references: ["WithName"],
		extends: ["WithName", "Partial"],
	},
	createenumfield: {
		name: "CreateEnumField",
		description: "",
		kind: "interface",
		references: ["EnumFieldBase", "CreateFieldBase", "CreateEnumCase"],
		members: [
			{
				name: "cases",
				type: "CreateEnumCase[]",
				description: "",
				optional: false,
			},
		],
		extends: ["EnumFieldBase", "CreateFieldBase"],
	},
	createenumvariable: {
		name: "CreateEnumVariable",
		description: "",
		kind: "interface",
		references: [
			"WithEnumVariableType",
			"CreateVariableBase",
			"CreateEnumCase",
		],
		members: [
			{
				name: "defaultCaseIndex",
				type: "number | undefined",
				description: "",
				optional: true,
			},
			{
				name: "cases",
				type: "CreateEnumCase[]",
				description: "",
				optional: false,
			},
		],
		extends: ["WithEnumVariableType", "CreateVariableBase"],
	},
	createfield: {
		name: "CreateField",
		description: "",
		kind: "alias",
		alias:
			"CreateBooleanField | CreateColorField | CreateNumberField | CreateStringField | CreateFormattedTextField | CreateImageField | CreateLinkField | CreateDateField | CreateFileField | CreateEnumField | CreateCollectionReferenceField | CreateMultiCollectionReferenceField | CreateFieldDivider | CreateArrayField",
		references: [
			"CreateBooleanField",
			"CreateColorField",
			"CreateNumberField",
			"CreateStringField",
			"CreateFormattedTextField",
			"CreateImageField",
			"CreateLinkField",
			"CreateDateField",
			"CreateFileField",
			"CreateEnumField",
			"CreateCollectionReferenceField",
			"CreateMultiCollectionReferenceField",
			"CreateFieldDivider",
			"CreateArrayField",
		],
	},
	createfieldbase: {
		name: "CreateFieldBase",
		description: "",
		kind: "alias",
		alias: "WithFieldName",
		references: ["WithFieldName"],
	},
	createfielddivider: {
		name: "CreateFieldDivider",
		description: "",
		kind: "interface",
		references: ["FieldDividerBase", "CreateFieldBase"],
		extends: ["FieldDividerBase", "CreateFieldBase"],
	},
	createfilefield: {
		name: "CreateFileField",
		description: "",
		kind: "interface",
		references: [
			"FileFieldBase",
			"CreateFieldBase",
			"WithAllowedFileTypes",
			"WithOptionalFieldRequired",
		],
		extends: [
			"FileFieldBase",
			"CreateFieldBase",
			"WithAllowedFileTypes",
			"WithOptionalFieldRequired",
		],
	},
	createfilevariable: {
		name: "CreateFileVariable",
		description: "",
		kind: "interface",
		references: [
			"WithFileVariableType",
			"CreateVariableBase",
			"WithAllowedFileTypes",
		],
		extends: [
			"WithFileVariableType",
			"CreateVariableBase",
			"Partial",
			"WithAllowedFileTypes",
		],
	},
	createformattedtextfield: {
		name: "CreateFormattedTextField",
		description: "",
		kind: "interface",
		references: [
			"FormattedTextFieldBase",
			"CreateFieldBase",
			"WithOptionalFieldRequired",
		],
		extends: [
			"FormattedTextFieldBase",
			"CreateFieldBase",
			"WithOptionalFieldRequired",
		],
	},
	createformattedtextvariable: {
		name: "CreateFormattedTextVariable",
		description: "",
		kind: "interface",
		references: ["WithFormattedTextVariableType", "CreateVariableBase"],
		extends: ["WithFormattedTextVariableType", "CreateVariableBase", "Partial"],
	},
	createimagefield: {
		name: "CreateImageField",
		description: "",
		kind: "interface",
		references: [
			"ImageFieldBase",
			"CreateFieldBase",
			"WithOptionalFieldRequired",
		],
		extends: ["ImageFieldBase", "CreateFieldBase", "WithOptionalFieldRequired"],
	},
	createimagevariable: {
		name: "CreateImageVariable",
		description: "",
		kind: "interface",
		references: ["WithImageVariableType", "CreateVariableBase"],
		extends: ["WithImageVariableType", "CreateVariableBase", "Partial"],
	},
	createlinkfield: {
		name: "CreateLinkField",
		description: "",
		kind: "interface",
		references: [
			"LinkFieldBase",
			"CreateFieldBase",
			"WithOptionalFieldRequired",
		],
		extends: ["LinkFieldBase", "CreateFieldBase", "WithOptionalFieldRequired"],
	},
	createlinkvariable: {
		name: "CreateLinkVariable",
		description: "",
		kind: "interface",
		references: ["WithLinkVariableType", "CreateVariableBase"],
		extends: ["WithLinkVariableType", "CreateVariableBase"],
	},
	createlocaleinput: {
		name: "CreateLocaleInput",
		description: "Input for creating a new locale.\n@alpha",
		kind: "interface",
		references: ["LocaleId"],
		members: [
			{
				name: "language",
				type: "string",
				description:
					'The language code (e.g., "en", "fr", "zh-Hans"). Use `getLocaleLanguages()` to get the list of valid codes.',
				optional: false,
			},
			{
				name: "region",
				type: "string",
				description:
					'The optional region code (e.g., "US", "CA"). Use `getLocaleRegions(language)` to get the list of valid codes.',
				optional: true,
			},
			{
				name: "fallbackLocaleId",
				type: "LocaleId",
				description:
					"ID of the fallback locale. Must reference an existing locale.",
				optional: true,
			},
			{
				name: "slug",
				type: "string",
				description:
					'URL slug for the locale (e.g., "en"). If not provided, one is derived from the code.',
				optional: true,
			},
			{
				name: "name",
				type: "string",
				description:
					'Display Name for the locale (e.g., "English (US)"). If not provided, one is derived from the code.',
				optional: true,
			},
			{
				name: "draft",
				type: "boolean",
				description: "Flag to mark the locale as a draft. Defaults to `false`.",
				optional: true,
			},
		],
	},
	createmulticollectionreferencefield: {
		name: "CreateMultiCollectionReferenceField",
		description: "",
		kind: "interface",
		references: [
			"MultiCollectionReferenceFieldBase",
			"CreateFieldBase",
			"WithFieldCollectionId",
			"WithOptionalFieldRequired",
		],
		extends: [
			"MultiCollectionReferenceFieldBase",
			"CreateFieldBase",
			"WithFieldCollectionId",
			"WithOptionalFieldRequired",
		],
	},
	createnodetype$1: {
		name: "CreateNodeType$1",
		description: "",
		kind: "alias",
		alias: "(typeof createableNodes)[number]",
		references: [],
	},
	createnumberfield: {
		name: "CreateNumberField",
		description: "",
		kind: "interface",
		references: ["NumberFieldBase", "CreateFieldBase"],
		extends: ["NumberFieldBase", "CreateFieldBase"],
	},
	createnumbervariable: {
		name: "CreateNumberVariable",
		description: "",
		kind: "interface",
		references: ["WithNumberVariableType", "CreateVariableBase"],
		extends: ["WithNumberVariableType", "CreateVariableBase", "Partial"],
	},
	createredirect: {
		name: "CreateRedirect",
		description: "",
		kind: "interface",
		references: ["RedirectAttributes", "WithToField"],
		members: [
			{
				name: "id",
				type: "never",
				description:
					"The id of the redirect, if provided, the redirect will be updated, otherwise a new redirect will be created",
				optional: true,
			},
		],
		extends: ["RedirectAttributes", "WithToField"],
	},
	createstringfield: {
		name: "CreateStringField",
		description: "",
		kind: "interface",
		references: [
			"StringFieldBase",
			"CreateFieldBase",
			"WithOptionalFieldRequired",
		],
		extends: [
			"StringFieldBase",
			"CreateFieldBase",
			"WithOptionalFieldRequired",
		],
	},
	createstringvariable: {
		name: "CreateStringVariable",
		description: "",
		kind: "interface",
		references: ["WithStringVariableType", "CreateVariableBase"],
		extends: ["WithStringVariableType", "CreateVariableBase", "Partial"],
	},
	createvariable: {
		name: "CreateVariable",
		description: "",
		kind: "alias",
		alias:
			"CreateBooleanVariable | CreateNumberVariable | CreateStringVariable | CreateFormattedTextVariable | CreateEnumVariable | CreateColorVariable | CreateImageVariable | CreateFileVariable | CreateLinkVariable | CreateDateVariable | CreateBorderVariable",
		references: [
			"CreateBooleanVariable",
			"CreateNumberVariable",
			"CreateStringVariable",
			"CreateFormattedTextVariable",
			"CreateEnumVariable",
			"CreateColorVariable",
			"CreateImageVariable",
			"CreateFileVariable",
			"CreateLinkVariable",
			"CreateDateVariable",
			"CreateBorderVariable",
		],
	},
	createvariablebase: {
		name: "CreateVariableBase",
		description: "",
		kind: "interface",
		references: ["WithName"],
		extends: ["WithName", "Partial"],
	},
	csscursor: {
		name: "CSSCursor",
		description: "",
		kind: "alias",
		alias:
			'"default" | "pointer" | "progress" | "copy" | "no-drop" | "not-allowed" | "grab" | "grabbing" | "context-menu" | "cell" | "crosshair" | "alias" | "zoom-in" | "zoom-out" | "help" | "nw-resize" | "n-resize" | "ne-resize" | "w-resize" | "move" | "e-resize" | "sw-resize" | "s-resize" | "se-resize" | "ew-resize" | "ns-resize" | "nwse-resize" | "nesw-resize" | "col-resize" | "row-resize" | "text" | "vertical-text" | "none"',
		references: [],
	},
	cssdimension: {
		name: "CSSDimension",
		description: "",
		kind: "alias",
		alias: "`${number}${U}`",
		references: [],
	},
	cursorcontrol: {
		name: "CursorControl",
		description: "",
		kind: "interface",
		references: ["ControlBase", "CSSCursor", "UnsupportedVariable"],
		members: [
			{
				name: "type",
				type: '"cursor"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "CSSCursor | UnsupportedVariable | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	customcode: {
		name: "CustomCode",
		description:
			"Custom HTML code settings for all injection locations, including disabled state.",
		kind: "alias",
		alias:
			"Record<CustomCodeLocation, {\n    disabled: boolean;\n    html: string | null;\n}>",
		references: ["CustomCodeLocation"],
	},
	customcodelocation: {
		name: "CustomCodeLocation",
		description: "Where in the HTML document the custom code is injected.",
		kind: "alias",
		alias: '"headStart" | "headEnd" | "bodyStart" | "bodyEnd"',
		references: [],
	},
	customcursor: {
		name: "CustomCursor",
		description: "",
		kind: "interface",
		references: ["Transition"],
		members: [
			{
				name: "smartComponentId",
				type: "string | undefined",
				description: "",
				optional: true,
			},
			{
				name: "variant",
				type: "string | undefined",
				description: "",
				optional: true,
			},
			{
				name: "follow",
				type: "boolean | undefined",
				description: "",
				optional: true,
			},
			{
				name: "offsetX",
				type: "number | undefined",
				description: "",
				optional: true,
			},
			{
				name: "offsetY",
				type: "number | undefined",
				description: "",
				optional: true,
			},
			{
				name: "placement",
				type: '"top" | "right" | "bottom" | "left" | undefined',
				description: "",
				optional: true,
			},
			{
				name: "alignment",
				type: '"start" | "center" | "end" | undefined',
				description: "",
				optional: true,
			},
			{
				name: "transitionEnabled",
				type: "boolean | undefined",
				description: "",
				optional: true,
			},
			{
				name: "transition",
				type: "Transition | undefined",
				description: "",
				optional: true,
			},
		],
	},
	customcursorcontrol: {
		name: "CustomCursorControl",
		description: "",
		kind: "interface",
		references: ["ControlBase", "CustomCursor", "UnsupportedVariable"],
		members: [
			{
				name: "type",
				type: '"customCursor"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "CustomCursor | UnsupportedVariable | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	datecontrol: {
		name: "DateControl",
		description: "",
		kind: "interface",
		references: ["ControlBase", "DateVariable", "UnsupportedComputedValue"],
		members: [
			{
				name: "type",
				type: '"date"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "string | DateVariable | UnsupportedComputedValue | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	datefieldbase: {
		name: "DateFieldBase",
		description: "",
		kind: "interface",
		references: ["DateFieldType"],
		members: [
			{
				name: "type",
				type: "DateFieldType",
				description: "",
				optional: false,
			},
			{
				name: "displayTime",
				type: "boolean",
				description: "",
				optional: true,
			},
		],
	},
	datefielddataentry: {
		name: "DateFieldDataEntry",
		description: "",
		kind: "interface",
		references: ["DateFieldType"],
		members: [
			{
				name: "type",
				type: "DateFieldType",
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "string | undefined",
				description: "",
				optional: false,
			},
		],
	},
	datefielddataentryinput: {
		name: "DateFieldDataEntryInput",
		description: "",
		kind: "interface",
		references: ["DateFieldType"],
		members: [
			{
				name: "type",
				type: "DateFieldType",
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "string | number | null",
				description: "",
				optional: false,
			},
		],
	},
	datefielddefinitiondata: {
		name: "DateFieldDefinitionData",
		description: "",
		kind: "interface",
		references: ["DateFieldBase", "WithFieldRequired", "FieldDefinitionBase"],
		extends: ["DateFieldBase", "WithFieldRequired", "FieldDefinitionBase"],
	},
	datefieldtype: {
		name: "DateFieldType",
		description: "",
		kind: "alias",
		alias: '"date"',
		references: [],
	},
	datevariabledata: {
		name: "DateVariableData",
		description: "",
		kind: "interface",
		references: [
			"WithDateVariableClass",
			"BaseVariableData",
			"ExplicitPartial",
			"WithDisplayTime",
		],
		extends: [
			"WithDateVariableClass",
			"BaseVariableData",
			"ExplicitPartial",
			"WithDisplayTime",
		],
	},
	deployment: {
		name: "Deployment",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "id",
				type: "string",
				description: "",
				optional: false,
			},
			{
				name: "createdAt",
				type: "string",
				description: "",
				optional: false,
			},
			{
				name: "updatedAt",
				type: "string",
				description: "",
				optional: false,
			},
		],
	},
	diagnosticbase: {
		name: "DiagnosticBase",
		description: "",
		kind: "interface",
		references: ["DiagnosticSpan"],
		members: [
			{
				name: "message",
				type: "string",
				description: "The error or warning message describing the diagnostic.",
				optional: false,
			},
			{
				name: "span",
				type: "DiagnosticSpan",
				description: "",
				optional: true,
			},
		],
	},
	diagnosticspan: {
		name: "DiagnosticSpan",
		description:
			"A span of characters in a code file, used to locate a diagnostic.",
		kind: "interface",
		references: ["ts.LineAndCharacter"],
		members: [
			{
				name: "offset",
				type: "number",
				description:
					"The first character, counted from the beginning of the file, 0-based.",
				optional: false,
			},
			{
				name: "length",
				type: "number",
				description: "",
				optional: false,
			},
			{
				name: "start",
				type: "ts.LineAndCharacter",
				description: "The first character, 0-based.",
				optional: false,
			},
			{
				name: "end",
				type: "ts.LineAndCharacter",
				description: "The last character, 0-based.",
				optional: false,
			},
		],
	},
	dragcompletecallback: {
		name: "DragCompleteCallback",
		description:
			"Callback invoked when a drag operation completes. Receives a\n{@link DragCompleteResult} indicating whether the drag was successful\nor not, including the inserted node ID on success or an error reason\non failure.",
		kind: "alias",
		alias: "(result: DragCompleteResult) => void",
		references: [],
	},
	drawablenode: {
		name: "DrawableNode",
		description: "",
		kind: "interface",
		references: [
			"WithNameTrait",
			"WithVisibleTrait",
			"WithLockedTrait",
			"WithOpacityTrait",
		],
		extends: [
			"WithNameTrait",
			"WithVisibleTrait",
			"WithLockedTrait",
			"WithOpacityTrait",
		],
	},
	editablearrayitemattributes: {
		name: "EditableArrayItemAttributes",
		description: "",
		kind: "interface",
		references: ["ArrayItemFieldDataInput"],
		members: [
			{
				name: "fieldData",
				type: "ArrayItemFieldDataInput | undefined",
				description: "Data for the fields.",
				optional: true,
			},
		],
	},
	editablecollectionitemattributes: {
		name: "EditableCollectionItemAttributes",
		description: "",
		kind: "interface",
		references: [
			"BaseCollectionItemData",
			"LocalizationSourceUpdate",
			"FieldDataInput",
			"LocaleId",
			"LocalizationGroupStatus",
		],
		members: [
			{
				name: "slug",
				type: "string | undefined",
				description:
					"Unique on collection level. Required if adding, optional if updating.",
				optional: true,
			},
			{
				name: "slugByLocale",
				type: "LocalizationSourceUpdate",
				description: "Localized values for the slug",
				optional: true,
			},
			{
				name: "fieldData",
				type: "FieldDataInput | undefined",
				description: "Data for the fields.",
				optional: true,
			},
			{
				name: "statusByLocale",
				type: "Record<LocaleId, LocalizationGroupStatus>",
				description:
					"Status of each locale for the resulting localization  group",
				optional: true,
			},
		],
		extends: ["BaseCollectionItemData"],
	},
	editablecollectionitemattributeswithid: {
		name: "EditableCollectionItemAttributesWithId",
		description: "",
		kind: "interface",
		references: ["EditableCollectionItemAttributes"],
		members: [
			{
				name: "id",
				type: "NodeId",
				description: "The ID of an existing item if updating. Omit if adding.",
				optional: false,
			},
		],
		extends: ["EditableCollectionItemAttributes"],
	},
	editablecomponentinstancenodeattributes: {
		name: "EditableComponentInstanceNodeAttributes",
		description: "",
		kind: "interface",
		references: [
			"DrawableNode",
			"WithPositionTrait",
			"WithPinsTrait",
			"WithSizeTrait",
			"WithSizeConstraintsTrait",
			"WithAspectRatioTrait",
			"WithControlAttributesTrait",
			"WithRotationTrait",
		],
		extends: [
			"DrawableNode",
			"WithPositionTrait",
			"WithPinsTrait",
			"WithSizeTrait",
			"WithSizeConstraintsTrait",
			"WithAspectRatioTrait",
			"WithControlAttributesTrait",
			"WithRotationTrait",
		],
	},
	editablecomponentnodeattributes: {
		name: "EditableComponentNodeAttributes",
		description: "",
		kind: "alias",
		alias: "WithNameTrait",
		references: ["WithNameTrait"],
	},
	editabledesignpagenodeattributes: {
		name: "EditableDesignPageNodeAttributes",
		description: "",
		kind: "alias",
		alias: "WithNameTrait",
		references: ["WithNameTrait"],
	},
	editableframenodeattributes: {
		name: "EditableFrameNodeAttributes",
		description: "",
		kind: "interface",
		references: [
			"DrawableNode",
			"WithPositionTrait",
			"WithPinsTrait",
			"WithSizeTrait",
			"WithSizeConstraintsTrait",
			"WithAspectRatioTrait",
			"WithZIndexTrait",
			"WithOverflowTrait",
			"WithBackgroundColorTrait",
			"WithBackgroundImageTrait",
			"WithBackgroundGradientTrait",
			"WithRotationTrait",
			"WithLinkTrait",
			"WithBorderRadiusTrait",
			"WithBorderTrait",
			"WithLayoutTrait",
			"WithGridItemTrait",
			"WithImageRenderingTrait",
		],
		extends: [
			"DrawableNode",
			"WithPositionTrait",
			"WithPinsTrait",
			"WithSizeTrait",
			"WithSizeConstraintsTrait",
			"WithAspectRatioTrait",
			"WithZIndexTrait",
			"WithOverflowTrait",
			"WithBackgroundColorTrait",
			"WithBackgroundImageTrait",
			"WithBackgroundGradientTrait",
			"WithRotationTrait",
			"WithLinkTrait",
			"WithBorderRadiusTrait",
			"WithBorderTrait",
			"WithLayoutTrait",
			"WithGridItemTrait",
			"WithImageRenderingTrait",
		],
	},
	editablesvgnodeattributes: {
		name: "EditableSVGNodeAttributes",
		description: "",
		kind: "interface",
		references: [
			"DrawableNode",
			"WithPositionTrait",
			"WithPinsTrait",
			"WithSizeTrait",
			"WithSVGTrait",
			"WithRotationTrait",
		],
		extends: [
			"DrawableNode",
			"WithPositionTrait",
			"WithPinsTrait",
			"WithSizeTrait",
			"WithSVGTrait",
			"WithRotationTrait",
		],
	},
	editabletextnodeattributes: {
		name: "EditableTextNodeAttributes",
		description: "",
		kind: "interface",
		references: [
			"DrawableNode",
			"WithPositionTrait",
			"WithPinsTrait",
			"WithSizeTrait",
			"WithSizeConstraintsTrait",
			"WithRotationTrait",
			"WithZIndexTrait",
			"WithOverflowTrait",
			"WithTextTruncationTrait",
			"WithFontTrait",
			"WithLinkTrait",
			"WithInlineTextStyleTrait",
			"WithGridItemTrait",
		],
		extends: [
			"DrawableNode",
			"WithPositionTrait",
			"WithPinsTrait",
			"WithSizeTrait",
			"WithSizeConstraintsTrait",
			"WithRotationTrait",
			"WithZIndexTrait",
			"WithOverflowTrait",
			"WithTextTruncationTrait",
			"WithFontTrait",
			"WithLinkTrait",
			"WithInlineTextStyleTrait",
			"WithGridItemTrait",
		],
	},
	editablewebpagenodeattributes: {
		name: "EditableWebPageNodeAttributes",
		description: "",
		kind: "alias",
		alias: "object",
		references: [],
	},
	enumcasedata: {
		name: "EnumCaseData",
		description: "",
		kind: "interface",
		references: ["WithId", "WithName", "WithNameByLocale"],
		extends: ["WithId", "WithName", "WithNameByLocale"],
	},
	enumcasedatainput: {
		name: "EnumCaseDataInput",
		description: "",
		kind: "interface",
		references: ["WithEnumCaseId", "WithEnumCaseNameInput"],
		extends: ["WithEnumCaseId", "WithEnumCaseNameInput"],
	},
	enumcasedatainputforupdate: {
		name: "EnumCaseDataInputForUpdate",
		description: "",
		kind: "interface",
		references: ["WithEnumCaseId", "WithEnumCaseNameInputForUpdate"],
		extends: ["WithEnumCaseId", "WithEnumCaseNameInputForUpdate"],
	},
	enumcontrol: {
		name: "EnumControl",
		description: "",
		kind: "interface",
		references: [
			"ControlBase",
			"UnsupportedVariable",
			"UnsupportedComputedValue",
			"EnumOption",
		],
		members: [
			{
				name: "type",
				type: '"enum"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "string | boolean | number | null | UnsupportedVariable | UnsupportedComputedValue | undefined",
				description: "The ID of the selected option",
				optional: true,
			},
			{
				name: "options",
				type: "EnumOption[]",
				description: "",
				optional: false,
			},
		],
		extends: ["ControlBase"],
	},
	enumfieldbase: {
		name: "EnumFieldBase",
		description: "",
		kind: "interface",
		references: ["EnumFieldType"],
		members: [
			{
				name: "type",
				type: "EnumFieldType",
				description: "",
				optional: false,
			},
		],
	},
	enumfielddataentry: {
		name: "EnumFieldDataEntry",
		description: "",
		kind: "interface",
		references: ["EnumFieldType"],
		members: [
			{
				name: "type",
				type: "EnumFieldType",
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "string",
				description: "",
				optional: false,
			},
		],
	},
	enumfielddataentryinput: {
		name: "EnumFieldDataEntryInput",
		description: "",
		kind: "interface",
		references: ["EnumFieldType"],
		members: [
			{
				name: "type",
				type: "EnumFieldType",
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "string",
				description: "",
				optional: false,
			},
		],
	},
	enumfielddefinitiondata: {
		name: "EnumFieldDefinitionData",
		description: "",
		kind: "interface",
		references: ["EnumFieldBase", "FieldDefinitionBase", "EnumCaseData"],
		members: [
			{
				name: "cases",
				type: "EnumCaseData[]",
				description: "",
				optional: false,
			},
		],
		extends: ["EnumFieldBase", "FieldDefinitionBase"],
	},
	enumfieldtype: {
		name: "EnumFieldType",
		description: "",
		kind: "alias",
		alias: '"enum"',
		references: [],
	},
	enumoption: {
		name: "EnumOption",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "id",
				type: "string | boolean | number | null",
				description: "",
				optional: false,
			},
		],
		extends: ["Partial"],
	},
	enumvariabledata: {
		name: "EnumVariableData",
		description: "",
		kind: "interface",
		references: [
			"WithEnumVariableClass",
			"BaseVariableData",
			"ExplicitPartial",
			"EnumCaseData",
		],
		members: [
			{
				name: "cases",
				type: "EnumCaseData[]",
				description: "",
				optional: false,
			},
		],
		extends: ["WithEnumVariableClass", "BaseVariableData", "ExplicitPartial"],
	},
	environmentinfo: {
		name: "EnvironmentInfo",
		description: "",
		kind: "interface",
		references: ["ReleaseChannel"],
		members: [
			{
				name: "releaseChannel",
				type: "ReleaseChannel | null",
				description: "",
				optional: false,
			},
			{
				name: "isEmployee",
				type: "boolean",
				description: "",
				optional: false,
			},
		],
	},
	eventhandlercontrol: {
		name: "EventHandlerControl",
		description: "",
		kind: "interface",
		references: ["ControlBase"],
		members: [
			{
				name: "type",
				type: '"eventHandler"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	explicitpartial: {
		name: "ExplicitPartial",
		description:
			"The opposite of Partial, can't omit it. Useful for making sure that you don't forget to handle a\nnew property in all cases where objects are built.",
		kind: "alias",
		alias: "{\n    [P in keyof T]: T[P] | undefined;\n}",
		references: [],
	},
	extractunmarshaledgradientattributes: {
		name: "ExtractUnmarshaledGradientAttributes",
		description: "",
		kind: "alias",
		alias:
			"Omit<Extract<UnmarshaledGradient, {\n    [classKey]: T[ClassKey];\n}>, ClassKey>",
		references: ["Extract", "UnmarshaledGradient", "ClassKey"],
	},
	field: {
		name: "Field",
		description: "Union of all CMS Collection field types.",
		kind: "alias",
		alias:
			"BooleanField | ColorField | NumberField | StringField | FormattedTextField | ImageField | LinkField | DateField | FieldDivider | UnsupportedField | FileField | EnumField | CollectionReferenceField | MultiCollectionReferenceField | ArrayField",
		references: [
			"BooleanField",
			"ColorField",
			"NumberField",
			"StringField",
			"FormattedTextField",
			"ImageField",
			"LinkField",
			"DateField",
			"FieldDivider",
			"UnsupportedField",
			"FileField",
			"EnumField",
			"CollectionReferenceField",
			"MultiCollectionReferenceField",
			"ArrayField",
		],
	},
	fielddata: {
		name: "FieldData",
		description: "",
		kind: "alias",
		alias: "Record<string, FieldDataEntry>",
		references: ["FieldDataEntry"],
	},
	fielddataentry: {
		name: "FieldDataEntry",
		description: "",
		kind: "alias",
		alias:
			"BooleanFieldDataEntry | ColorFieldDataEntry | DateFieldDataEntry | EnumFieldDataEntry | FileFieldDataEntry | LinkFieldDataEntry | NumberFieldDataEntry | FormattedTextFieldDataEntry | StringFieldDataEntry | ImageFieldDataEntry | CollectionReferenceFieldDataEntry | MultiCollectionReferenceFieldDataEntry | ArrayFieldDataEntry",
		references: [
			"BooleanFieldDataEntry",
			"ColorFieldDataEntry",
			"DateFieldDataEntry",
			"EnumFieldDataEntry",
			"FileFieldDataEntry",
			"LinkFieldDataEntry",
			"NumberFieldDataEntry",
			"FormattedTextFieldDataEntry",
			"StringFieldDataEntry",
			"ImageFieldDataEntry",
			"CollectionReferenceFieldDataEntry",
			"MultiCollectionReferenceFieldDataEntry",
			"ArrayFieldDataEntry",
		],
	},
	fielddataentryinput: {
		name: "FieldDataEntryInput",
		description: "",
		kind: "alias",
		alias:
			"BooleanFieldDataEntryInput | ColorFieldDataEntryInput | DateFieldDataEntryInput | EnumFieldDataEntryInput | FileFieldDataEntryInput | LinkFieldDataEntryInput | NumberFieldDataEntryInput | FormattedTextFieldDataEntryInput | StringFieldDataEntryInput | ImageFieldDataEntryInput | CollectionReferenceFieldDataEntryInput | MultiCollectionReferenceFieldDataEntryInput | ArrayFieldDataEntryInput",
		references: [
			"BooleanFieldDataEntryInput",
			"ColorFieldDataEntryInput",
			"DateFieldDataEntryInput",
			"EnumFieldDataEntryInput",
			"FileFieldDataEntryInput",
			"LinkFieldDataEntryInput",
			"NumberFieldDataEntryInput",
			"FormattedTextFieldDataEntryInput",
			"StringFieldDataEntryInput",
			"ImageFieldDataEntryInput",
			"CollectionReferenceFieldDataEntryInput",
			"MultiCollectionReferenceFieldDataEntryInput",
			"ArrayFieldDataEntryInput",
		],
	},
	fielddatainput: {
		name: "FieldDataInput",
		description: "",
		kind: "alias",
		alias: "Record<string, FieldDataEntryInput>",
		references: ["FieldDataEntryInput"],
	},
	fielddefinitionbase: {
		name: "FieldDefinitionBase",
		description: "",
		kind: "interface",
		references: ["WithFieldId", "WithFieldName"],
		extends: ["WithFieldId", "WithFieldName"],
	},
	fielddividerbase: {
		name: "FieldDividerBase",
		description: "",
		kind: "interface",
		references: ["FieldDividerType"],
		members: [
			{
				name: "type",
				type: "FieldDividerType",
				description: "",
				optional: false,
			},
		],
	},
	fielddividertype: {
		name: "FieldDividerType",
		description: "",
		kind: "alias",
		alias: '"divider"',
		references: [],
	},
	fileassetdata: {
		name: "FileAssetData",
		description: "",
		kind: "interface",
		references: ["AssetIdentifier", "FileAssetDataFields"],
		members: [
			{
				name: "[classKey]",
				type: "typeof fileAssetDiscriminator",
				description: "",
				optional: false,
			},
		],
		extends: ["AssetIdentifier", "FileAssetDataFields"],
	},
	fileassetdatafields: {
		name: "FileAssetDataFields",
		description: "",
		kind: "interface",
		references: ["AssetData"],
		members: [
			{
				name: "extension",
				type: "string | null",
				description: "",
				optional: false,
			},
		],
		extends: ["AssetData"],
	},
	filecontrol: {
		name: "FileControl",
		description: "",
		kind: "interface",
		references: [
			"ControlBase",
			"FileAsset",
			"FileVariable",
			"UnsupportedVariable",
			"UnsupportedComputedValue",
		],
		members: [
			{
				name: "type",
				type: '"file"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "FileAsset | FileVariable | UnsupportedVariable | UnsupportedComputedValue | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	filefieldbase: {
		name: "FileFieldBase",
		description: "",
		kind: "interface",
		references: ["FileFieldType"],
		members: [
			{
				name: "type",
				type: "FileFieldType",
				description: "",
				optional: false,
			},
		],
	},
	filefielddataentry: {
		name: "FileFieldDataEntry",
		description: "",
		kind: "interface",
		references: ["FileFieldType", "FileAsset"],
		members: [
			{
				name: "type",
				type: "FileFieldType",
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "FileAsset | undefined",
				description: "",
				optional: false,
			},
		],
	},
	filefielddataentryinput: {
		name: "FileFieldDataEntryInput",
		description: "",
		kind: "interface",
		references: ["FileFieldType"],
		members: [
			{
				name: "type",
				type: "FileFieldType",
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "string | null",
				description: "",
				optional: false,
			},
		],
	},
	filefielddefinitiondata: {
		name: "FileFieldDefinitionData",
		description: "",
		kind: "interface",
		references: [
			"FileFieldBase",
			"FieldDefinitionBase",
			"WithAllowedFileTypes",
			"WithFieldRequired",
		],
		extends: [
			"FileFieldBase",
			"FieldDefinitionBase",
			"WithAllowedFileTypes",
			"WithFieldRequired",
		],
	},
	filefieldtype: {
		name: "FileFieldType",
		description: "",
		kind: "alias",
		alias: '"file"',
		references: [],
	},
	filevariabledata: {
		name: "FileVariableData",
		description: "",
		kind: "interface",
		references: [
			"WithFileVariableClass",
			"BaseVariableData",
			"ExplicitPartial",
			"WithAllowedFileTypes",
		],
		extends: [
			"WithFileVariableClass",
			"BaseVariableData",
			"ExplicitPartial",
			"WithAllowedFileTypes",
		],
	},
	fitcontent: {
		name: "FitContent",
		description: "",
		kind: "alias",
		alias: '"fit-content"',
		references: [],
	},
	fitimage: {
		name: "FitImage",
		description: "",
		kind: "alias",
		alias: '"fit-image"',
		references: [],
	},
	fontattributes: {
		name: "FontAttributes",
		description: "",
		kind: "alias",
		alias:
			"Prettify<Partial<{\n    weight: FontWeight;\n    style: FontStyle$1;\n}>>",
		references: ["Prettify"],
	},
	fontcontrol: {
		name: "FontControl",
		description: "",
		kind: "interface",
		references: ["ControlBase", "FontStyle"],
		members: [
			{
				name: "type",
				type: '"font"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "FontStyle | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	fontdata: {
		name: "FontData",
		description: "",
		kind: "interface",
		references: ["FontSelector", "FontWeight", "FontStyle$1"],
		members: [
			{
				name: "[classKey]",
				type: "typeof fontClassDiscriminator",
				description: "",
				optional: false,
			},
			{
				name: "selector",
				type: "FontSelector",
				description: "",
				optional: false,
			},
			{
				name: "family",
				type: "string",
				description: "",
				optional: false,
			},
			{
				name: "weight",
				type: "FontWeight | null",
				description: "",
				optional: false,
			},
			{
				name: "style",
				type: "FontStyle$1 | null",
				description: "",
				optional: false,
			},
		],
	},
	fontselector: {
		name: "FontSelector",
		description: "",
		kind: "alias",
		alias: "string",
		references: [],
	},
	fontstyle: {
		name: "FontStyle",
		description: "",
		kind: "alias",
		alias:
			'Pick<CSSProperties, "fontFamily" | "fontWeight" | "fontStyle" | "fontSize" | "lineHeight" | "textAlign" | "letterSpacing" | "fontFeatureSettings">',
		references: ["CSSProperties"],
	},
	fontstyle$1: {
		name: "FontStyle$1",
		description: "",
		kind: "alias",
		alias: "(typeof fontStyles)[number]",
		references: [],
	},
	fontweight: {
		name: "FontWeight",
		description:
			"Boldness as an absolute value.\n\n These values are usually associated with the following names:\n- `100` - Thin\n- `200` - Extra Light (Ultra Light)\n- `300` - Light\n- `400` - Normal\n- `500` - Medium\n- `600` - Semi Bold (Demi Bold)\n- `700` - Bold\n- `800` - Extra Bold\n- `900` - Black (Heavy)",
		kind: "alias",
		alias: "(typeof fontWeights)[number]",
		references: [],
	},
	formattedtextcontrol: {
		name: "FormattedTextControl",
		description: "",
		kind: "interface",
		references: [
			"ControlBase",
			"FormattedTextVariable",
			"UnsupportedComputedValue",
		],
		members: [
			{
				name: "type",
				type: '"formattedText"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "string | FormattedTextVariable | UnsupportedComputedValue | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	formattedtextfieldbase: {
		name: "FormattedTextFieldBase",
		description: "",
		kind: "interface",
		references: ["FormattedTextFieldType", "ContentType"],
		members: [
			{
				name: "type",
				type: "FormattedTextFieldType",
				description: "",
				optional: false,
			},
			{
				name: "contentType",
				type: "ContentType",
				description:
					'Controls how formatted text content is processed: "auto" (detect), "markdown", or "html"',
				optional: true,
			},
		],
	},
	formattedtextfielddataentry: {
		name: "FormattedTextFieldDataEntry",
		description: "",
		kind: "interface",
		references: ["FormattedTextFieldType", "InlineLocalizationValueByLocale"],
		members: [
			{
				name: "type",
				type: "FormattedTextFieldType",
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "string",
				description: "",
				optional: false,
			},
			{
				name: "valueByLocale",
				type: "InlineLocalizationValueByLocale",
				description: "",
				optional: false,
			},
		],
	},
	formattedtextfielddataentryinput: {
		name: "FormattedTextFieldDataEntryInput",
		description: "",
		kind: "interface",
		references: [
			"FormattedTextFieldType",
			"ContentType",
			"LocalizationSourceUpdate",
		],
		members: [
			{
				name: "type",
				type: "FormattedTextFieldType",
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "string",
				description: "",
				optional: false,
			},
			{
				name: "contentType",
				type: "ContentType",
				description: '@default "html"',
				optional: true,
			},
			{
				name: "valueByLocale",
				type: "LocalizationSourceUpdate",
				description: "",
				optional: true,
			},
		],
	},
	formattedtextfielddefinitiondata: {
		name: "FormattedTextFieldDefinitionData",
		description: "",
		kind: "interface",
		references: [
			"FormattedTextFieldBase",
			"WithFieldRequired",
			"FieldDefinitionBase",
		],
		extends: [
			"FormattedTextFieldBase",
			"WithFieldRequired",
			"FieldDefinitionBase",
		],
	},
	formattedtextfieldinput: {
		name: "FormattedTextFieldInput",
		description: "",
		kind: "interface",
		references: ["CreateFormattedTextField", "WithIdAndOptionalUserEditable"],
		extends: ["CreateFormattedTextField", "WithIdAndOptionalUserEditable"],
	},
	formattedtextfieldtype: {
		name: "FormattedTextFieldType",
		description: "",
		kind: "alias",
		alias: '"formattedText"',
		references: [],
	},
	formattedtextvariabledata: {
		name: "FormattedTextVariableData",
		description: "",
		kind: "interface",
		references: [
			"WithFormattedTextVariableClass",
			"BaseVariableData",
			"WithStringDefaultValue",
		],
		extends: [
			"WithFormattedTextVariableClass",
			"BaseVariableData",
			"WithStringDefaultValue",
		],
	},
	fourpixelnumbershorthand: {
		name: "FourPixelNumberShorthand",
		description: "",
		kind: "alias",
		alias:
			"PixelNumber | `${PixelNumber} ${PixelNumber} ${PixelNumber} ${PixelNumber}`",
		references: ["PixelNumber"],
	},
	fusednumber: {
		name: "FusedNumber",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "single",
				type: "number",
				description: "",
				optional: false,
			},
			{
				name: "fused",
				type: "[number, number, number, number]",
				description: "",
				optional: false,
			},
			{
				name: "isFused",
				type: "boolean",
				description: "",
				optional: false,
			},
		],
	},
	fusednumbercontrol: {
		name: "FusedNumberControl",
		description: "",
		kind: "interface",
		references: ["ControlBase", "FusedNumber"],
		members: [
			{
				name: "type",
				type: '"fusedNumber"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "FusedNumber | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	gapcontrol: {
		name: "GapControl",
		description: "",
		kind: "interface",
		references: [
			"ControlBase",
			"TwoPixelNumberShorthand",
			"UnsupportedVariable",
			"NumberVariable",
			"UnsupportedComputedValue",
		],
		members: [
			{
				name: "type",
				type: '"gap"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "TwoPixelNumberShorthand | UnsupportedVariable | NumberVariable | UnsupportedComputedValue | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	gesture: {
		name: "Gesture",
		description: "",
		kind: "alias",
		alias: '"hover" | "pressed" | "loading" | "error"',
		references: [],
	},
	gridcontentalignment: {
		name: "GridContentAlignment",
		description: "",
		kind: "alias",
		alias: '"start" | "center" | "end"',
		references: [],
	},
	griditemalignment: {
		name: "GridItemAlignment",
		description: "",
		kind: "alias",
		alias: '"start" | "center" | "end"',
		references: [],
	},
	griditemcolumnspan: {
		name: "GridItemColumnSpan",
		description: "",
		kind: "alias",
		alias: 'number | "all"',
		references: [],
	},
	gridlayout: {
		name: "GridLayout",
		description: "",
		kind: "interface",
		references: ["GridContentAlignment"],
		members: [
			{
				name: "gridColumnCount",
				type: 'number | "auto-fill" | null',
				description:
					'Number of columns in the grid. Requires `layout: "grid"`. Supported by FrameNode.',
				optional: false,
			},
			{
				name: "gridRowCount",
				type: "number | null",
				description:
					'Number of rows in the grid. Requires `layout: "grid"`. Supported by FrameNode.',
				optional: false,
			},
			{
				name: "gridAlignment",
				type: "GridContentAlignment | null",
				description:
					'How items are aligned within the grid. Requires `layout: "grid"`. Supported by FrameNode.',
				optional: false,
			},
			{
				name: "gridColumnWidthType",
				type: '"fixed" | "minmax" | null',
				description:
					'Type of column width sizing: `"fixed"` or `"minmax"`. Requires `layout: "grid"`. Supported by FrameNode.',
				optional: false,
			},
			{
				name: "gridColumnWidth",
				type: "number | null",
				description:
					'Width of grid columns in pixels. Requires `layout: "grid"`. Supported by FrameNode.',
				optional: false,
			},
			{
				name: "gridColumnMinWidth",
				type: "number | null",
				description:
					'Minimum width of grid columns in pixels. Requires `layout: "grid"`. Supported by FrameNode.',
				optional: false,
			},
			{
				name: "gridRowHeightType",
				type: '"fixed" | "auto" | "fit" | null',
				description:
					'Type of row height sizing: `"fixed"`, `"auto"`, or `"fit"`. Requires `layout: "grid"`. Supported by FrameNode.',
				optional: false,
			},
			{
				name: "gridRowHeight",
				type: "number | null",
				description:
					'Height of grid rows in pixels. Requires `layout: "grid"`. Supported by FrameNode.',
				optional: false,
			},
		],
	},
	heightconstraint: {
		name: "HeightConstraint",
		description: "",
		kind: "alias",
		alias:
			"CSSDimension<CSSUnit.Pixel | CSSUnit.Percentage | CSSUnit.ViewportHeight>",
		references: [
			"CSSDimension",
			"CSSUnit.Pixel",
			"CSSUnit.Percentage",
			"CSSUnit.ViewportHeight",
		],
	},
	heightlength: {
		name: "HeightLength",
		description: "",
		kind: "alias",
		alias:
			"Length | FitContent | CSSDimension<CSSUnit.ViewportHeight> | FitImage",
		references: [
			"Length",
			"FitContent",
			"CSSDimension",
			"CSSUnit.ViewportHeight",
			"FitImage",
		],
	},
	hostname: {
		name: "Hostname",
		description: "",
		kind: "interface",
		references: ["HostnameType"],
		members: [
			{
				name: "hostname",
				type: "string",
				description: "",
				optional: false,
			},
			{
				name: "type",
				type: "HostnameType",
				description: "",
				optional: false,
			},
			{
				name: "isPrimary",
				type: "boolean",
				description: "",
				optional: false,
			},
			{
				name: "isPublished",
				type: "boolean",
				description: "",
				optional: false,
			},
			{
				name: "deploymentId",
				type: "string",
				description: "",
				optional: false,
			},
		],
	},
	hostnametype: {
		name: "HostnameType",
		description: "",
		kind: "alias",
		alias: '"default" | "custom" | "version"',
		references: [],
	},
	imageassetdata: {
		name: "ImageAssetData",
		description: "",
		kind: "interface",
		references: ["AssetIdentifier", "ImageDataFields"],
		members: [
			{
				name: "[classKey]",
				type: "typeof imageAssetDiscriminator",
				description: "",
				optional: false,
			},
		],
		extends: ["AssetIdentifier", "ImageDataFields"],
	},
	imagecontrol: {
		name: "ImageControl",
		description: "",
		kind: "interface",
		references: [
			"ControlBase",
			"ImageAsset",
			"ImageVariable",
			"UnsupportedComputedValue",
		],
		members: [
			{
				name: "type",
				type: '"image"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "ImageAsset | ImageVariable | UnsupportedComputedValue | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	imagedata: {
		name: "ImageData",
		description: "",
		kind: "interface",
		references: ["WithOptionalName", "ImageOptions"],
		extends: ["WithOptionalName", "ImageOptions"],
	},
	imagedatafields: {
		name: "ImageDataFields",
		description: "",
		kind: "interface",
		references: ["AssetData", "Resolution"],
		members: [
			{
				name: "thumbnailUrl",
				type: "string",
				description: "Thumbnail URL of the image.",
				optional: false,
			},
			{
				name: "altText",
				type: "string",
				description: "Optional Alt Text of the image.",
				optional: true,
			},
			{
				name: "resolution",
				type: "Resolution",
				description: 'The resolution set on the image. Defaults to "auto"',
				optional: false,
			},
		],
		extends: ["AssetData"],
	},
	imagefieldbase: {
		name: "ImageFieldBase",
		description: "",
		kind: "interface",
		references: ["ImageFieldType"],
		members: [
			{
				name: "type",
				type: "ImageFieldType",
				description: "",
				optional: false,
			},
		],
	},
	imagefielddataentry: {
		name: "ImageFieldDataEntry",
		description: "",
		kind: "interface",
		references: ["ImageFieldType", "ImageAsset"],
		members: [
			{
				name: "type",
				type: "ImageFieldType",
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "ImageAsset | undefined",
				description: "",
				optional: false,
			},
		],
	},
	imagefielddataentryinput: {
		name: "ImageFieldDataEntryInput",
		description: "",
		kind: "interface",
		references: ["ImageFieldType", "LocalizationSourceUpdate"],
		members: [
			{
				name: "type",
				type: "ImageFieldType",
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "string | null",
				description: "",
				optional: false,
			},
			{
				name: "alt",
				type: "string",
				description: "",
				optional: true,
			},
			{
				name: "altByLocale",
				type: "LocalizationSourceUpdate",
				description: "",
				optional: true,
			},
		],
	},
	imagefielddefinitiondata: {
		name: "ImageFieldDefinitionData",
		description: "",
		kind: "interface",
		references: ["ImageFieldBase", "WithFieldRequired", "FieldDefinitionBase"],
		extends: ["ImageFieldBase", "WithFieldRequired", "FieldDefinitionBase"],
	},
	imagefieldtype: {
		name: "ImageFieldType",
		description: "",
		kind: "alias",
		alias: '"image"',
		references: [],
	},
	imageoptions: {
		name: "ImageOptions",
		description: "",
		kind: "interface",
		references: ["ImageRendering", "Resolution"],
		members: [
			{
				name: "preferredImageRendering",
				type: "ImageRendering",
				description: 'The image rendering to use.\nDefaults to "auto"',
				optional: true,
			},
			{
				name: "altText",
				type: "string",
				description: "The alt text to use for the image.",
				optional: true,
			},
			{
				name: "resolution",
				type: "Resolution",
				description: 'The resolution to use for the image.\nDefaults to "auto"',
				optional: true,
			},
		],
	},
	imagerendering: {
		name: "ImageRendering",
		description:
			'Controls how images are rendered. Use `"pixelated"` for pixel art.',
		kind: "alias",
		alias: '"auto" | "pixelated"',
		references: [],
	},
	imagevariabledata: {
		name: "ImageVariableData",
		description: "",
		kind: "interface",
		references: [
			"WithImageVariableClass",
			"BaseVariableData",
			"ExplicitPartial",
		],
		extends: ["WithImageVariableClass", "BaseVariableData", "ExplicitPartial"],
	},
	initialstate: {
		name: "InitialState",
		description: "",
		kind: "alias",
		alias:
			'{\n    mode: Mode;\n    intent: "plugin/open";\n} | {\n    mode: PickModes<"collection" | "syncManagedCollection" | "configureManagedCollection">;\n    intent: "collection/add";\n}',
		references: [],
	},
	inlinelocalizationvaluebylocale: {
		name: "InlineLocalizationValueByLocale",
		description: "",
		kind: "alias",
		alias: "Record<LocaleId, LocalizationValue>",
		references: ["LocaleId", "LocalizationValue"],
	},
	iscomponentgesturevariant: {
		name: "IsComponentGestureVariant",
		description: "",
		kind: "interface",
		references: ["IsComponentVariant", "Gesture"],
		members: [
			{
				name: "gesture",
				type: "Gesture",
				description: "",
				optional: false,
			},
		],
		extends: ["IsComponentVariant"],
	},
	iscomponentvariant: {
		name: "IsComponentVariant",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "isVariant",
				type: "true",
				description: "",
				optional: false,
			},
			{
				name: "isPrimaryVariant",
				type: "boolean",
				description: "",
				optional: false,
			},
			{
				name: "inheritsFromId",
				type: "string",
				description: "",
				optional: false,
			},
		],
	},
	layouttype: {
		name: "LayoutType",
		description:
			'The layout type for a frame: `"stack"` (flex) or `"grid"` (CSS grid).',
		kind: "alias",
		alias: '"stack" | "grid"',
		references: [],
	},
	length: {
		name: "Length",
		description: "",
		kind: "alias",
		alias:
			"CSSDimension<CSSUnit.Pixel | CSSUnit.Percentage | CSSUnit.Fraction>",
		references: [
			"CSSDimension",
			"CSSUnit.Pixel",
			"CSSUnit.Percentage",
			"CSSUnit.Fraction",
		],
	},
	lineargradientdata: {
		name: "LinearGradientData",
		description: "",
		kind: "interface",
		references: ["BaseGradientData", "LinearGradientType"],
		members: [
			{
				name: "[classKey]",
				type: "LinearGradientType",
				description: "",
				optional: false,
			},
			{
				name: "angle",
				type: "number",
				description: "",
				optional: false,
			},
		],
		extends: ["BaseGradientData"],
	},
	lineargradienttype: {
		name: "LinearGradientType",
		description: "",
		kind: "alias",
		alias: '"LinearGradient"',
		references: [],
	},
	link: {
		name: "Link",
		description: "",
		kind: "alias",
		alias: "LinkToWebPage | LinkToUrl",
		references: ["LinkToWebPage", "LinkToUrl"],
	},
	linkcontrol: {
		name: "LinkControl",
		description: "",
		kind: "interface",
		references: [
			"ControlBase",
			"Link",
			"LinkVariable",
			"FileVariable",
			"UnsupportedComputedValue",
		],
		members: [
			{
				name: "type",
				type: '"link"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "Link | LinkVariable | FileVariable | UnsupportedComputedValue | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	linkfieldbase: {
		name: "LinkFieldBase",
		description: "",
		kind: "interface",
		references: ["LinkFieldType"],
		members: [
			{
				name: "type",
				type: "LinkFieldType",
				description: "",
				optional: false,
			},
		],
	},
	linkfielddataentry: {
		name: "LinkFieldDataEntry",
		description: "",
		kind: "interface",
		references: ["LinkFieldType", "InlineLocalizationValueByLocale"],
		members: [
			{
				name: "type",
				type: "LinkFieldType",
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "string | undefined",
				description: "",
				optional: false,
			},
			{
				name: "valueByLocale",
				type: "InlineLocalizationValueByLocale",
				description: "",
				optional: false,
			},
		],
	},
	linkfielddataentryinput: {
		name: "LinkFieldDataEntryInput",
		description: "",
		kind: "interface",
		references: ["LinkFieldType", "LocalizationSourceUpdate"],
		members: [
			{
				name: "type",
				type: "LinkFieldType",
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "string | null",
				description: "",
				optional: false,
			},
			{
				name: "valueByLocale",
				type: "LocalizationSourceUpdate",
				description: "",
				optional: true,
			},
		],
	},
	linkfielddefinitiondata: {
		name: "LinkFieldDefinitionData",
		description: "",
		kind: "interface",
		references: ["LinkFieldBase", "WithFieldRequired", "FieldDefinitionBase"],
		extends: ["LinkFieldBase", "WithFieldRequired", "FieldDefinitionBase"],
	},
	linkfieldtype: {
		name: "LinkFieldType",
		description: "",
		kind: "alias",
		alias: '"link"',
		references: [],
	},
	linkrelcontrol: {
		name: "LinkRelControl",
		description: "",
		kind: "interface",
		references: ["ControlBase", "Rel", "UnsupportedVariable"],
		members: [
			{
				name: "type",
				type: '"linkRel"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "readonly Rel[] | UnsupportedVariable | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	linktourl: {
		name: "LinkToUrl",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "type",
				type: '"url"',
				description: "",
				optional: false,
			},
			{
				name: "url",
				type: "string",
				description: "",
				optional: false,
			},
		],
	},
	linktowebpage: {
		name: "LinkToWebPage",
		description: "",
		kind: "interface",
		references: ["ScrollSectionSelector"],
		members: [
			{
				name: "type",
				type: '"webPage"',
				description: "",
				optional: false,
			},
			{
				name: "webPageId",
				type: "string",
				description: "",
				optional: false,
			},
			{
				name: "scrollSection",
				type: "ScrollSectionSelector | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["Partial"],
	},
	linkvariabledata: {
		name: "LinkVariableData",
		description: "",
		kind: "interface",
		references: ["WithLinkVariableClass", "BaseVariableData"],
		extends: ["WithLinkVariableClass", "BaseVariableData"],
	},
	lintconfig: {
		name: "LintConfig",
		description:
			"@deprecated The lintCode API was removed. This type will be removed in the near future.",
		kind: "alias",
		alias: "Record<LintRuleNameValue, LintIssueSeverityValue>",
		references: ["LintRuleNameValue", "LintIssueSeverityValue"],
	},
	lintdiagnostic: {
		name: "LintDiagnostic",
		description:
			"@deprecated The lintCode API was removed. This type will be removed in the near future.",
		kind: "interface",
		references: [
			"DiagnosticBase",
			"DiagnosticSpan",
			"LintIssueSeverityValue",
			"LintLink",
		],
		members: [
			{
				name: "span",
				type: "DiagnosticSpan",
				description: "The span of the invalid code in the file.",
				optional: false,
			},
			{
				name: "severity",
				type: "LintIssueSeverityValue",
				description: 'Issue severity: `"error"` or `"warning"`.',
				optional: false,
			},
			{
				name: "link",
				type: "LintLink",
				description: "Optional documentation link for the diagnostic issue.",
				optional: true,
			},
		],
		extends: ["DiagnosticBase"],
	},
	lintissueseverityvalue: {
		name: "LintIssueSeverityValue",
		description: "",
		kind: "alias",
		alias: '"error" | "warning"',
		references: [],
	},
	lintlink: {
		name: "LintLink",
		description:
			"@deprecated The lintCode API was removed. This type will be removed in the near future.",
		kind: "interface",
		references: [],
		members: [
			{
				name: "url",
				type: "string",
				description: "",
				optional: false,
			},
			{
				name: "text",
				type: "string",
				description: "",
				optional: false,
			},
		],
	},
	lintrulenamevalue: {
		name: "LintRuleNameValue",
		description: "",
		kind: "alias",
		alias: '"forbid-browser-apis"',
		references: [],
	},
	locale: {
		name: "Locale",
		description:
			"A locale configured in the project for localization. Locales represent\na language paired with an optional region (e.g. English, or English (Canada)).",
		kind: "interface",
		references: ["LocaleId"],
		members: [
			{
				name: "id",
				type: "LocaleId",
				description: "A unique identifier for the locale.",
				optional: false,
			},
			{
				name: "code",
				type: "string",
				description: 'The BCP 47 language code, e.g. `"en-US"` or `"nl"`.',
				optional: false,
			},
			{
				name: "name",
				type: "string",
				description: 'The display name of the locale, e.g. `"English (US)"`.',
				optional: false,
			},
			{
				name: "slug",
				type: "string",
				description: 'The URL slug used for this locale, e.g. `"en"`.',
				optional: false,
			},
			{
				name: "fallbackLocaleId",
				type: "string",
				description:
					"The ID of the fallback locale. When a Localization Source does not have\na localized value set for this locale, Framer will fall back to the value\ndefined in the fallback locale.",
				optional: true,
			},
		],
	},
	localeid: {
		name: "LocaleId",
		description: "",
		kind: "alias",
		alias: "string",
		references: [],
	},
	localizationdata: {
		name: "LocalizationData",
		description: "",
		kind: "interface",
		references: [
			"LocalizationSourceId",
			"LocalizationSourceUpdate",
			"LocalizationGroupId",
			"LocalizationGroupStatusByLocale",
		],
		members: [
			{
				name: "valuesBySource",
				type: "Record<LocalizationSourceId, LocalizationSourceUpdate>",
				description: "",
				optional: true,
			},
			{
				name: "statusByLocaleByGroup",
				type: "Record<LocalizationGroupId, LocalizationGroupStatusByLocale>",
				description: "",
				optional: true,
			},
		],
	},
	localizationgroup: {
		name: "LocalizationGroup",
		description:
			"A group of related localization sources, such as all translatable content for a\npage or collection item. Localization groups are things like pages or CMS items\nthat contain one or more localization sources.\n\nA group can have a different status in each locale. For example, you may want to\nshow a blog post in your French locale but exclude it in your Dutch locale.",
		kind: "interface",
		references: [
			"LocalizationGroupId",
			"LocalizationSource",
			"LocalizationGroupStatusByLocale",
		],
		members: [
			{
				name: "id",
				type: "LocalizationGroupId",
				description: "A unique identifier for the localization group.",
				optional: false,
			},
			{
				name: "name",
				type: "string",
				description: "The name of the localization group.",
				optional: false,
			},
			{
				name: "type",
				type: '"collection" | "collection-item" | "component" | "page" | "settings" | "template"',
				description: "The kind of content this group represents.",
				optional: false,
			},
			{
				name: "supportsExcludedStatus",
				type: "boolean",
				description:
					'Whether this group supports the `"excluded"` status for locales.',
				optional: false,
			},
			{
				name: "sources",
				type: "LocalizationSource[]",
				description: "The localization sources within this group.",
				optional: false,
			},
			{
				name: "statusByLocale",
				type: "LocalizationGroupStatusByLocale",
				description:
					'The status of each locale for this group. A localization group can have\na different status in each locale (`"excluded"` or `"ready"`).',
				optional: false,
			},
		],
	},
	localizationgroupid: {
		name: "LocalizationGroupId",
		description: "",
		kind: "alias",
		alias: "string",
		references: [],
	},
	localizationgroupstatus: {
		name: "LocalizationGroupStatus",
		description: "",
		kind: "alias",
		alias: '"excluded" | "ready"',
		references: [],
	},
	localizationgroupstatusbylocale: {
		name: "LocalizationGroupStatusByLocale",
		description: "",
		kind: "alias",
		alias: "Record<LocaleId, LocalizationGroupStatus>",
		references: ["LocaleId", "LocalizationGroupStatus"],
	},
	localizationsource: {
		name: "LocalizationSource",
		description:
			"A localizable string on your site. Localization sources are the actual\ntranslatable strings from your site, along with their localized values.",
		kind: "interface",
		references: [
			"LocalizationSourceId",
			"LocalizationSourceType",
			"LocalizationValueByLocale",
		],
		members: [
			{
				name: "id",
				type: "LocalizationSourceId",
				description:
					"A unique identifier for the localization source, stable across syncs.",
				optional: false,
			},
			{
				name: "type",
				type: "LocalizationSourceType",
				description:
					'The type of value for this source, such as `"string"`, `"formattedText"`, `"altText"`, `"slug"`, or `"link"`.',
				optional: false,
			},
			{
				name: "value",
				type: "string",
				description:
					"The current value of the localization source in the default locale.",
				optional: false,
			},
			{
				name: "valueByLocale",
				type: "LocalizationValueByLocale",
				description:
					"Localized values and metadata for each locale, keyed by locale ID.",
				optional: false,
			},
		],
	},
	localizationsourceid: {
		name: "LocalizationSourceId",
		description: "",
		kind: "alias",
		alias: "string",
		references: [],
	},
	localizationsourcetype: {
		name: "LocalizationSourceType",
		description: "",
		kind: "alias",
		alias: '"string" | "formattedText" | "altText" | "slug" | "link"',
		references: [],
	},
	localizationsourceupdate: {
		name: "LocalizationSourceUpdate",
		description: "",
		kind: "alias",
		alias: "Record<LocaleId, LocalizedValueUpdate>",
		references: ["LocaleId", "LocalizedValueUpdate"],
	},
	localizationvalue: {
		name: "LocalizationValue",
		description:
			'The localized value and associated metadata for a specific locale. Use the `status`\ndiscriminator to narrow the type:\n\n- `"new"` - A value that is currently not set.\n- `"needsReview"` - A value that has been set but marked as needing review.\n- `"warning"` - A value that has been set but has warnings.\n- `"done"` - A value that has been set and is complete.',
		kind: "alias",
		alias:
			"LocalizationValueNew | LocalizationValueNeedsReview | LocalizationValueDone | LocalizationValueWarning",
		references: [
			"LocalizationValueNew",
			"LocalizationValueNeedsReview",
			"LocalizationValueDone",
			"LocalizationValueWarning",
		],
	},
	localizationvaluebase: {
		name: "LocalizationValueBase",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "value",
				type: "string | null",
				description:
					"The actual text of the localized value. A `value` of `null` means that\nthe value will fall back to the value set in the fallback locale.",
				optional: false,
			},
			{
				name: "lastEdited",
				type: "number",
				description:
					"The timestamp (in milliseconds since epoch) of when this localized value was last edited.",
				optional: false,
			},
			{
				name: "readonly",
				type: "boolean",
				description:
					"Whether the value is read only and therefore cannot be updated.\n\nFor example, this is the case for localized values that were set\nwhen syncing a managed collection. To update these values, you must\nprovide them when syncing the plugin that manages the collection.",
				optional: false,
			},
		],
	},
	localizationvaluebylocale: {
		name: "LocalizationValueByLocale",
		description: "",
		kind: "alias",
		alias: "Record<LocaleId, LocalizationValue>",
		references: ["LocaleId", "LocalizationValue"],
	},
	localizationvaluedone: {
		name: "LocalizationValueDone",
		description:
			"A localization value that has been set and is considered complete.",
		kind: "interface",
		references: ["LocalizationValueBase"],
		members: [
			{
				name: "status",
				type: '"done"',
				description: "Indicates this value has been set.",
				optional: false,
			},
		],
		extends: ["LocalizationValueBase"],
	},
	localizationvalueneedsreview: {
		name: "LocalizationValueNeedsReview",
		description:
			"A localization value that has been set but needs review, either manually flagged or because the default locale value changed.",
		kind: "interface",
		references: ["LocalizationValueBase"],
		members: [
			{
				name: "status",
				type: '"needsReview"',
				description: "Indicates this value needs review.",
				optional: false,
			},
		],
		extends: ["LocalizationValueBase"],
	},
	localizationvaluenew: {
		name: "LocalizationValueNew",
		description: "A localization value that has not been set yet.",
		kind: "interface",
		references: [],
		members: [
			{
				name: "value",
				type: "null",
				description: "Always `null` for new (unset) localization values.",
				optional: false,
			},
			{
				name: "status",
				type: '"new"',
				description: "Indicates this value is currently not set.",
				optional: false,
			},
		],
	},
	localizationvaluewarning: {
		name: "LocalizationValueWarning",
		description: "A localization value that has been set but has warnings.",
		kind: "interface",
		references: ["LocalizationValueBase"],
		members: [
			{
				name: "status",
				type: '"warning"',
				description: "Indicates this value has warnings.",
				optional: false,
			},
			{
				name: "warning",
				type: "string",
				description:
					'A message describing why the localized value has a warning status. Only set when status is `"warning"`.',
				optional: false,
			},
		],
		extends: ["LocalizationValueBase"],
	},
	localizedvalueupdate: {
		name: "LocalizedValueUpdate",
		description: "",
		kind: "alias",
		alias:
			'{\n    action: "set";\n    value: string;\n    needsReview?: boolean;\n} | {\n    action: "clear";\n} | {\n    action: "ignore";\n    needsReview?: boolean;\n}',
		references: [],
	},
	location: {
		name: "Location",
		description: "",
		kind: "interface",
		references: ["Coordinate"],
		members: [
			{
				name: "coordinate",
				type: "Coordinate",
				description: "",
				optional: false,
			},
			{
				name: "title",
				type: "string",
				description: 'Place name, e.g. "Eiffel Tower" or "Framer".',
				optional: true,
			},
			{
				name: "address",
				type: "string",
				description:
					'Formatted address string, e.g. "Rozengracht 207, 1016 LZ Amsterdam, Netherlands".',
				optional: true,
			},
		],
	},
	locationcontrol: {
		name: "LocationControl",
		description: "",
		kind: "interface",
		references: ["ControlBase", "Location"],
		members: [
			{
				name: "type",
				type: '"location"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "Location | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	managedarrayfieldinput: {
		name: "ManagedArrayFieldInput",
		description: "",
		kind: "interface",
		references: [
			"CreateArrayField",
			"WithIdAndOptionalUserEditable",
			"ManagedArrayItemFieldInput",
		],
		members: [
			{
				name: "fields",
				type: "[ManagedArrayItemFieldInput]",
				description: "",
				optional: false,
			},
		],
		extends: ["CreateArrayField", "WithIdAndOptionalUserEditable"],
	},
	managedarrayitemfieldinput: {
		name: "ManagedArrayItemFieldInput",
		description: "",
		kind: "interface",
		references: ["CreateArrayItemField", "WithIdAndOptionalUserEditable"],
		extends: ["CreateArrayItemField", "WithIdAndOptionalUserEditable"],
	},
	managedbooleanfieldinput: {
		name: "ManagedBooleanFieldInput",
		description: "",
		kind: "interface",
		references: ["CreateBooleanField", "WithIdAndOptionalUserEditable"],
		extends: ["CreateBooleanField", "WithIdAndOptionalUserEditable"],
	},
	managedcollectionfield: {
		name: "ManagedCollectionField",
		description:
			"Any kind of collection field definition that was created by a plugin and is\nsupported by the API.",
		kind: "alias",
		alias: "SupportedFieldDefinitionData & WithUserEditable",
		references: ["SupportedFieldDefinitionData", "WithUserEditable"],
	},
	managedcollectionfieldinput: {
		name: "ManagedCollectionFieldInput",
		description: "",
		kind: "alias",
		alias:
			"Exclude<ManagedCollectionFieldInputData, ManagedEnumFieldInput> | ManagedEnumFieldInputForSetFields",
		references: [
			"Exclude",
			"ManagedCollectionFieldInputData",
			"ManagedEnumFieldInput",
			"ManagedEnumFieldInputForSetFields",
		],
	},
	managedcollectionfieldinputdata: {
		name: "ManagedCollectionFieldInputData",
		description: "",
		kind: "alias",
		alias:
			"ManagedBooleanFieldInput | ManagedColorFieldInput | ManagedNumberFieldInput | ManagedStringFieldInput | FormattedTextFieldInput | ManagedImageFieldInput | ManagedLinkFieldInput | ManagedDateFieldInput | ManagedFileFieldInput | ManagedEnumFieldInput | ManagedCollectionReferenceFieldInput | ManagedMultiCollectionReferenceFieldInput | ManagedArrayFieldInput",
		references: [
			"ManagedBooleanFieldInput",
			"ManagedColorFieldInput",
			"ManagedNumberFieldInput",
			"ManagedStringFieldInput",
			"FormattedTextFieldInput",
			"ManagedImageFieldInput",
			"ManagedLinkFieldInput",
			"ManagedDateFieldInput",
			"ManagedFileFieldInput",
			"ManagedEnumFieldInput",
			"ManagedCollectionReferenceFieldInput",
			"ManagedMultiCollectionReferenceFieldInput",
			"ManagedArrayFieldInput",
		],
	},
	managedcollectioniteminput: {
		name: "ManagedCollectionItemInput",
		description: "",
		kind: "interface",
		references: [
			"BaseCollectionItemData",
			"LocalizationSourceUpdate",
			"FieldDataInput",
			"LocalizationGroupStatusByLocale",
		],
		members: [
			{
				name: "id",
				type: "string",
				description:
					"Required unique ID of your choice. Using an ID instead of the slug helps avoid data loss.",
				optional: false,
			},
			{
				name: "slug",
				type: "string",
				description: "Unique on collection level.",
				optional: false,
			},
			{
				name: "slugByLocale",
				type: "LocalizationSourceUpdate",
				description: "Localized values for the slug",
				optional: true,
			},
			{
				name: "fieldData",
				type: "FieldDataInput",
				description: "Data for the fields.",
				optional: false,
			},
			{
				name: "statusByLocale",
				type: "LocalizationGroupStatusByLocale",
				description:
					"Status of each locale for the resulting localization  group",
				optional: true,
			},
		],
		extends: ["BaseCollectionItemData"],
	},
	managedcollectionmanagedby: {
		name: "ManagedCollectionManagedBy",
		description: "",
		kind: "alias",
		alias: '"thisPlugin" | "anotherPlugin"',
		references: [],
	},
	managedcollectionreferencefieldinput: {
		name: "ManagedCollectionReferenceFieldInput",
		description: "",
		kind: "interface",
		references: [
			"CreateCollectionReferenceField",
			"WithIdAndOptionalUserEditable",
		],
		extends: [
			"CreateCollectionReferenceField",
			"WithIdAndOptionalUserEditable",
		],
	},
	managedcolorfieldinput: {
		name: "ManagedColorFieldInput",
		description: "",
		kind: "interface",
		references: ["CreateColorField", "WithIdAndOptionalUserEditable"],
		extends: ["CreateColorField", "WithIdAndOptionalUserEditable"],
	},
	manageddatefieldinput: {
		name: "ManagedDateFieldInput",
		description: "",
		kind: "interface",
		references: ["CreateDateField", "WithIdAndOptionalUserEditable"],
		extends: ["CreateDateField", "WithIdAndOptionalUserEditable"],
	},
	managedenumfieldinput: {
		name: "ManagedEnumFieldInput",
		description: "",
		kind: "interface",
		references: [
			"EnumFieldBase",
			"CreateFieldBase",
			"WithIdAndOptionalUserEditable",
			"EnumCaseDataInput",
		],
		members: [
			{
				name: "cases",
				type: "EnumCaseDataInput[]",
				description: "",
				optional: false,
			},
		],
		extends: [
			"EnumFieldBase",
			"CreateFieldBase",
			"WithIdAndOptionalUserEditable",
		],
	},
	managedenumfieldinputforsetfields: {
		name: "ManagedEnumFieldInputForSetFields",
		description: "",
		kind: "interface",
		references: ["EnumCaseDataInputForUpdate"],
		members: [
			{
				name: "cases",
				type: "EnumCaseDataInputForUpdate[]",
				description: "",
				optional: false,
			},
		],
		extends: ["Omit"],
	},
	managedfilefieldinput: {
		name: "ManagedFileFieldInput",
		description: "",
		kind: "interface",
		references: ["CreateFileField", "WithIdAndOptionalUserEditable"],
		extends: ["CreateFileField", "WithIdAndOptionalUserEditable"],
	},
	managedimagefieldinput: {
		name: "ManagedImageFieldInput",
		description: "",
		kind: "interface",
		references: ["CreateImageField", "WithIdAndOptionalUserEditable"],
		extends: ["CreateImageField", "WithIdAndOptionalUserEditable"],
	},
	managedlinkfieldinput: {
		name: "ManagedLinkFieldInput",
		description: "",
		kind: "interface",
		references: ["CreateLinkField", "WithIdAndOptionalUserEditable"],
		extends: ["CreateLinkField", "WithIdAndOptionalUserEditable"],
	},
	managedmulticollectionreferencefieldinput: {
		name: "ManagedMultiCollectionReferenceFieldInput",
		description: "",
		kind: "interface",
		references: [
			"CreateMultiCollectionReferenceField",
			"WithIdAndOptionalUserEditable",
		],
		extends: [
			"CreateMultiCollectionReferenceField",
			"WithIdAndOptionalUserEditable",
		],
	},
	managednumberfieldinput: {
		name: "ManagedNumberFieldInput",
		description: "",
		kind: "interface",
		references: ["CreateNumberField", "WithIdAndOptionalUserEditable"],
		extends: ["CreateNumberField", "WithIdAndOptionalUserEditable"],
	},
	managedstringfieldinput: {
		name: "ManagedStringFieldInput",
		description: "",
		kind: "interface",
		references: ["CreateStringField", "WithIdAndOptionalUserEditable"],
		extends: ["CreateStringField", "WithIdAndOptionalUserEditable"],
	},
	menuitem: {
		name: "MenuItem",
		description: "A menu item, either a normal action item or a separator.",
		kind: "alias",
		alias: "NormalMenuItem | SeparatorMenuItem",
		references: ["NormalMenuItem", "SeparatorMenuItem"],
	},
	menuplacement: {
		name: "MenuPlacement",
		description: "",
		kind: "alias",
		alias:
			"MenuPlacementVertical | MenuPlacementHorizontal | `${MenuPlacementVertical}-${MenuPlacementHorizontal}`",
		references: ["MenuPlacementVertical", "MenuPlacementHorizontal"],
	},
	menuplacementhorizontal: {
		name: "MenuPlacementHorizontal",
		description: "",
		kind: "alias",
		alias: '"left" | "right"',
		references: [],
	},
	menuplacementvertical: {
		name: "MenuPlacementVertical",
		description: "",
		kind: "alias",
		alias: '"top" | "bottom"',
		references: [],
	},
	mode: {
		name: "Mode",
		description: "",
		kind: "alias",
		alias: "keyof typeof allModesRecord",
		references: [],
	},
	multicollectionreferencecontrol: {
		name: "MultiCollectionReferenceControl",
		description: "",
		kind: "interface",
		references: [
			"ControlBase",
			"UnsupportedVariable",
			"UnsupportedComputedValue",
		],
		members: [
			{
				name: "type",
				type: '"multiCollectionReference"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "readonly string[] | UnsupportedVariable | UnsupportedComputedValue | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	multicollectionreferencefieldbase: {
		name: "MultiCollectionReferenceFieldBase",
		description: "",
		kind: "interface",
		references: ["MultiCollectionReferenceFieldType"],
		members: [
			{
				name: "type",
				type: "MultiCollectionReferenceFieldType",
				description: "",
				optional: false,
			},
		],
	},
	multicollectionreferencefielddataentry: {
		name: "MultiCollectionReferenceFieldDataEntry",
		description: "",
		kind: "interface",
		references: ["MultiCollectionReferenceFieldType"],
		members: [
			{
				name: "type",
				type: "MultiCollectionReferenceFieldType",
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "readonly string[]",
				description: "",
				optional: false,
			},
		],
	},
	multicollectionreferencefielddataentryinput: {
		name: "MultiCollectionReferenceFieldDataEntryInput",
		description: "",
		kind: "interface",
		references: ["MultiCollectionReferenceFieldType"],
		members: [
			{
				name: "type",
				type: "MultiCollectionReferenceFieldType",
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "readonly string[] | null",
				description: "",
				optional: false,
			},
		],
	},
	multicollectionreferencefielddefinitiondata: {
		name: "MultiCollectionReferenceFieldDefinitionData",
		description: "",
		kind: "interface",
		references: [
			"MultiCollectionReferenceFieldBase",
			"FieldDefinitionBase",
			"WithFieldCollectionId",
			"WithFieldRequired",
		],
		extends: [
			"MultiCollectionReferenceFieldBase",
			"FieldDefinitionBase",
			"WithFieldCollectionId",
			"WithFieldRequired",
		],
	},
	multicollectionreferencefieldtype: {
		name: "MultiCollectionReferenceFieldType",
		description: "",
		kind: "alias",
		alias: '"multiCollectionReference"',
		references: [],
	},
	namedfileassetinput: {
		name: "NamedFileAssetInput",
		description: "",
		kind: "interface",
		references: ["WithOptionalName", "AssetInput"],
		members: [
			{
				name: "file",
				type: "AssetInput",
				description: "",
				optional: false,
			},
		],
		extends: ["WithOptionalName"],
	},
	namedimageassetinput: {
		name: "NamedImageAssetInput",
		description: "",
		kind: "interface",
		references: ["ImageData", "AssetInput"],
		members: [
			{
				name: "image",
				type: "AssetInput",
				description: "",
				optional: false,
			},
		],
		extends: ["ImageData"],
	},
	namedimagetransfer: {
		name: "NamedImageTransfer",
		description: "",
		kind: "alias",
		alias: "AssetDataTransfer & ImageData",
		references: ["AssetDataTransfer", "ImageData"],
	},
	navigableoptions: {
		name: "NavigableOptions",
		description: "Options for the `navigateTo` method.",
		kind: "interface",
		references: ["ZoomIntoViewOptions", "NavigableScrollToOptions"],
		members: [
			{
				name: "select",
				type: "boolean | undefined",
				description:
					"Selects the item after navigation. Selects the item on the canvas or opens\nthe editor sidebar on a collection item.\n@default true",
				optional: true,
			},
			{
				name: "zoomIntoView",
				type: "boolean | ZoomIntoViewOptions | undefined",
				description:
					"Zooms and centers the item after scrolling it into view (only applicable to canvas nodes).\n@default true",
				optional: true,
			},
			{
				name: "scrollTo",
				type: "NavigableScrollToOptions | undefined",
				description:
					"Scrolls to and highlights a specific part of the content.",
				optional: true,
			},
		],
	},
	navigablescrolltooptions: {
		name: "NavigableScrollToOptions",
		description: "",
		kind: "interface",
		references: ["CodeFilePosition"],
		members: [
			{
				name: "collectionFieldId",
				type: "string",
				description: "",
				optional: true,
			},
			{
				name: "codeFilePosition",
				type: "CodeFilePosition",
				description: "",
				optional: true,
			},
		],
	},
	noderuntimeerrorresult: {
		name: "NodeRuntimeErrorResult",
		description: "",
		kind: "alias",
		alias:
			'{\n    type: "ModuleRuntimeError" | "ReactRenderingError";\n    message: string;\n}',
		references: [],
	},
	nodetype: {
		name: "NodeType",
		description: "",
		kind: "alias",
		alias: '"component" | "collection"',
		references: [],
	},
	normalmenuitem: {
		name: "NormalMenuItem",
		description: "An actionable menu item with a label and optional submenu.",
		kind: "interface",
		references: ["MenuItem"],
		members: [
			{
				name: "type",
				type: "never",
				description: "",
				optional: true,
			},
			{
				name: "label",
				type: "string",
				description: "",
				optional: false,
			},
			{
				name: "secondaryLabel",
				type: "string",
				description: "",
				optional: true,
			},
			{
				name: "enabled",
				type: "boolean",
				description: "",
				optional: true,
			},
			{
				name: "visible",
				type: "boolean",
				description: "",
				optional: true,
			},
			{
				name: "checked",
				type: "boolean",
				description: "",
				optional: true,
			},
			{
				name: "submenu",
				type: "MenuItem[]",
				description: "",
				optional: true,
			},
			{
				name: "onAction",
				type: "() => void",
				description: "",
				optional: true,
			},
		],
	},
	notificationvariant: {
		name: "NotificationVariant",
		description: "",
		kind: "alias",
		alias: '"info" | "success" | "error" | "warning"',
		references: [],
	},
	notify: {
		name: "Notify",
		description: "Function signature for displaying a notification message.",
		kind: "alias",
		alias: "(message: string, options?: NotifyOptions) => Notification",
		references: [],
	},
	nullablepartialrecord: {
		name: "NullablePartialRecord",
		description:
			"Type helper to transform a interface so that each value can be null or undefined.",
		kind: "alias",
		alias: "Partial<NullableRecord<T>>",
		references: ["NullableRecord", "T"],
	},
	nullablerecord: {
		name: "NullableRecord",
		description:
			"Type helper to transform a interface so that each value can be null.",
		kind: "alias",
		alias: "{\n    [P in keyof T]-?: T[P] | null;\n}",
		references: [],
	},
	numbercontrol: {
		name: "NumberControl",
		description: "",
		kind: "interface",
		references: ["ControlBase", "NumberVariable", "UnsupportedComputedValue"],
		members: [
			{
				name: "type",
				type: '"number"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "number | NumberVariable | UnsupportedComputedValue | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	numberfieldbase: {
		name: "NumberFieldBase",
		description: "",
		kind: "interface",
		references: ["NumberFieldType"],
		members: [
			{
				name: "type",
				type: "NumberFieldType",
				description: "",
				optional: false,
			},
		],
	},
	numberfielddataentry: {
		name: "NumberFieldDataEntry",
		description: "",
		kind: "interface",
		references: ["NumberFieldType"],
		members: [
			{
				name: "type",
				type: "NumberFieldType",
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "number",
				description: "",
				optional: false,
			},
		],
	},
	numberfielddataentryinput: {
		name: "NumberFieldDataEntryInput",
		description: "",
		kind: "alias",
		alias: "NumberFieldDataEntry",
		references: ["NumberFieldDataEntry"],
	},
	numberfielddefinitiondata: {
		name: "NumberFieldDefinitionData",
		description: "",
		kind: "interface",
		references: ["NumberFieldBase", "FieldDefinitionBase"],
		extends: ["NumberFieldBase", "FieldDefinitionBase"],
	},
	numberfieldtype: {
		name: "NumberFieldType",
		description: "",
		kind: "alias",
		alias: '"number"',
		references: [],
	},
	numbervariabledata: {
		name: "NumberVariableData",
		description: "",
		kind: "interface",
		references: [
			"WithNumberVariableClass",
			"BaseVariableData",
			"WithNumberDefaultValue",
		],
		extends: [
			"WithNumberVariableClass",
			"BaseVariableData",
			"WithNumberDefaultValue",
		],
	},
	objectcontrol: {
		name: "ObjectControl",
		description: "",
		kind: "interface",
		references: ["ControlBase", "Control"],
		members: [
			{
				name: "type",
				type: '"object"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "Record<string, Control> | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	optimizationstatus: {
		name: "OptimizationStatus",
		description: "",
		kind: "alias",
		alias: '"optimizing" | "optimized" | "error"',
		references: [],
	},
	optionalcolorstyleattributes: {
		name: "OptionalColorStyleAttributes",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "dark",
				type: "string | null",
				description: "",
				optional: false,
			},
		],
	},
	othernodetype: {
		name: "OtherNodeType",
		description: "",
		kind: "alias",
		alias: "(typeof otherNodes)[number]",
		references: [],
	},
	overflow: {
		name: "Overflow",
		description:
			"Controls whether content that overflows the frame is clipped.",
		kind: "alias",
		alias: '"visible" | "hidden" | "auto" | "clip"',
		references: [],
	},
	ownership: {
		name: "Ownership",
		description: "",
		kind: "alias",
		alias:
			'{\n    type: "project";\n} | {\n    type: "external";\n    name: string;\n}',
		references: [],
	},
	paddingcontrol: {
		name: "PaddingControl",
		description: "",
		kind: "interface",
		references: [
			"ControlBase",
			"FourPixelNumberShorthand",
			"UnsupportedVariable",
			"NumberVariable",
			"UnsupportedComputedValue",
		],
		members: [
			{
				name: "type",
				type: '"padding"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "FourPixelNumberShorthand | UnsupportedVariable | NumberVariable | UnsupportedComputedValue | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	pagescopecontrol: {
		name: "PageScopeControl",
		description: "",
		kind: "interface",
		references: ["ControlBase", "LinkToWebPage"],
		members: [
			{
				name: "type",
				type: '"pageScope"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "LinkToWebPage | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	permethodpermissionmap: {
		name: "PerMethodPermissionMap",
		description: "",
		kind: "alias",
		alias: "{\n    [K in ProtectedMethod]: boolean;\n}",
		references: [],
	},
	pixelnumber: {
		name: "PixelNumber",
		description: "",
		kind: "alias",
		alias: "`${number}px`",
		references: [],
	},
	pluginmessageapi: {
		name: "PluginMessageAPI",
		description: "",
		kind: "interface",
		references: [
			"ApiVersion1User",
			"User",
			"ApiVersion1ProjectInfo",
			"ProjectInfo",
			"ImageAssetData",
			"NamedImageTransfer",
			"ColorStyleData",
			"LintConfig",
			"LintDiagnostic",
			"ts.server.protocol.CompilerOptions",
			"TypecheckDiagnostic",
		],
		members: [
			{
				name: "hideUI",
				type: 'FramerPluginAPI["hideUI"]',
				description: "",
				optional: false,
			},
			{
				name: "setBackgroundMessage",
				type: 'FramerPluginAPI["setBackgroundMessage"]',
				description: "",
				optional: false,
			},
			{
				name: "setCloseWarning",
				type: "(message: string | false) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "closePlugin",
				type: '(...parameters: Parameters<FramerPluginAPI["closePlugin"]>) => Promise<void>',
				description: "",
				optional: false,
			},
			{
				name: "removeNode",
				type: 'FramerPluginAPI["removeNode"]',
				description: "",
				optional: false,
			},
			{
				name: "removeNodes",
				type: 'FramerPluginAPI["removeNodes"]',
				description: "",
				optional: false,
			},
			{
				name: "addSVG",
				type: 'FramerPluginAPI["addSVG"]',
				description: "",
				optional: false,
			},
			{
				name: "getRect",
				type: 'FramerPluginAPI["getRect"]',
				description: "",
				optional: false,
			},
			{
				name: "setText",
				type: 'FramerPluginAPI["setText"]',
				description: "",
				optional: false,
			},
			{
				name: "getText",
				type: 'FramerPluginAPI["getText"]',
				description: "",
				optional: false,
			},
			{
				name: "addText",
				type: 'FramerPluginAPI["addText"]',
				description: "",
				optional: false,
			},
			{
				name: "preloadDetachedComponentLayers",
				type: 'FramerPluginAPI["preloadDetachedComponentLayers"]',
				description: "",
				optional: false,
			},
			{
				name: "preloadImageUrlForInsertion",
				type: 'FramerPluginAPI["preloadImageUrlForInsertion"]',
				description: "",
				optional: false,
			},
			{
				name: "preloadDragPreviewImage",
				type: 'FramerPluginAPI["preloadDragPreviewImage"]',
				description: "",
				optional: false,
			},
			{
				name: "setCustomCode",
				type: 'FramerPluginAPI["setCustomCode"]',
				description: "",
				optional: false,
			},
			{
				name: "getCustomCode",
				type: 'FramerPluginAPI["getCustomCode"]',
				description: "",
				optional: false,
			},
			{
				name: "setPluginData",
				type: 'FramerPluginAPI["setPluginData"]',
				description: "",
				optional: false,
			},
			{
				name: "getPluginData",
				type: 'FramerPluginAPI["getPluginData"]',
				description: "",
				optional: false,
			},
			{
				name: "getPluginDataKeys",
				type: 'FramerPluginAPI["getPluginDataKeys"]',
				description: "",
				optional: false,
			},
			{
				name: "getLocales",
				type: 'FramerPluginAPI["getLocales"]',
				description: "",
				optional: false,
			},
			{
				name: "getDefaultLocale",
				type: 'FramerPluginAPI["getDefaultLocale"]',
				description: "",
				optional: false,
			},
			{
				name: "getActiveLocale",
				type: 'FramerPluginAPI["getActiveLocale"]',
				description: "",
				optional: false,
			},
			{
				name: "getLocalizationGroups",
				type: 'FramerPluginAPI["getLocalizationGroups"]',
				description: "",
				optional: false,
			},
			{
				name: "setLocalizationData",
				type: 'FramerPluginAPI["setLocalizationData"]',
				description: "",
				optional: false,
			},
			{
				name: "createLocale",
				type: "(input: CreateLocaleInput) => Promise<Locale>",
				description: "@alpha",
				optional: false,
			},
			{
				name: "getLocaleLanguages",
				type: "() => Promise<{\n        code: string;\n        name: string;\n    }[]>",
				description: "@alpha",
				optional: false,
			},
			{
				name: "getLocaleRegions",
				type: "(language: string) => Promise<{\n        code: string;\n        name: string;\n        isCommon: boolean;\n    }[]>",
				description: "@alpha",
				optional: false,
			},
			{
				name: "unstable_ensureMinimumDependencyVersion",
				type: 'FramerPluginAPI["unstable_ensureMinimumDependencyVersion"]',
				description: "",
				optional: false,
			},
			{
				name: "showUI",
				type: "(options?: UIOptions) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "notify",
				type: "(message: string, options: NotifyOptionsData) => Promise<NotificationCloseReason>",
				description: "",
				optional: false,
			},
			{
				name: "closeNotification",
				type: "(notificationId: string) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "getCurrentUser",
				type: "() => Promise<ApiVersion1User>",
				description: "",
				optional: false,
			},
			{
				name: "getCurrentUser2",
				type: "() => Promise<User>",
				description: "",
				optional: false,
			},
			{
				name: "getProjectInfo",
				type: "() => Promise<ApiVersion1ProjectInfo>",
				description: "",
				optional: false,
			},
			{
				name: "getProjectInfo2",
				type: "() => Promise<ProjectInfo>",
				description: "",
				optional: false,
			},
			{
				name: "getSelection",
				type: "() => Promise<SomeNodeData[]>",
				description: "",
				optional: false,
			},
			{
				name: "setSelection",
				type: "(nodeIds: NodeId[]) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "getCanvasRoot",
				type: "() => Promise<SomeNodeData>",
				description: "",
				optional: false,
			},
			{
				name: "getPublishInfo",
				type: "() => Promise<PublishInfo>",
				description: "",
				optional: false,
			},
			{
				name: "createNode",
				type: "(type: CreateNodeType, parentId: NodeId | null, attributes: Record<string, unknown>) => Promise<SomeNodeData | null>",
				description: "",
				optional: false,
			},
			{
				name: "cloneNode",
				type: "(nodeId: NodeId) => Promise<SomeNodeData | null>",
				description: "",
				optional: false,
			},
			{
				name: "getNode",
				type: "(nodeId: NodeId) => Promise<SomeNodeData | null>",
				description: "",
				optional: false,
			},
			{
				name: "getParent",
				type: "(nodeId: NodeId) => Promise<SomeNodeData | null>",
				description: "",
				optional: false,
			},
			{
				name: "getChildren",
				type: "(nodeId: NodeId) => Promise<SomeNodeData[]>",
				description: "",
				optional: false,
			},
			{
				name: "removeNodes2",
				type: "(ids: NodeId[]) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "zoomIntoView",
				type: "(nodeIds: NodeId[], options?: ZoomIntoViewOptions) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "navigateTo",
				type: "(nodeId: string, opts?: NavigableOptions) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "setAttributes",
				type: "(nodeId: NodeId, attributes: Record<string, unknown>) => Promise<SomeNodeData | null>",
				description: "",
				optional: false,
			},
			{
				name: "getTextForNode",
				type: "(nodeId: NodeId) => Promise<string | null>",
				description: "",
				optional: false,
			},
			{
				name: "setTextForNode",
				type: "(nodeId: NodeId, text: string) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "getSVGForNode",
				type: "(nodeId: NodeId) => Promise<string | null>",
				description: "",
				optional: false,
			},
			{
				name: "getNodesWithType",
				type: "(nodeId: NodeId | null, type: KnownNodeClass) => Promise<SomeNodeData[]>",
				description: "",
				optional: false,
			},
			{
				name: "getNodesWithAttribute",
				type: "(nodeId: NodeId | null, attribute: string) => Promise<SomeNodeData[]>",
				description: "",
				optional: false,
			},
			{
				name: "getNodesWithAttributeSet",
				type: "(nodeId: NodeId | null, attribute: string) => Promise<SomeNodeData[]>",
				description: "",
				optional: false,
			},
			{
				name: "addImages",
				type: "(image: readonly NamedImageTransfer[]) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "getImage",
				type: "() => Promise<ImageAssetData | null>",
				description: "",
				optional: false,
			},
			{
				name: "addImage",
				type: "(image: NamedImageTransfer) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "setImage",
				type: "(image: NamedImageTransfer) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "uploadImage",
				type: "(image: NamedImageTransfer) => Promise<ImageAssetData>",
				description: "",
				optional: false,
			},
			{
				name: "uploadImages",
				type: "(image: readonly NamedImageTransfer[]) => Promise<ImageAssetData[]>",
				description: "",
				optional: false,
			},
			{
				name: "uploadFile",
				type: "(file: NamedAssetTransfer) => Promise<FileAssetData>",
				description: "",
				optional: false,
			},
			{
				name: "uploadFiles",
				type: "(files: readonly NamedAssetTransfer[]) => Promise<FileAssetData[]>",
				description: "",
				optional: false,
			},
			{
				name: "getImageData",
				type: '(image: AssetIdentifier & Partial<Pick<ImageAssetData, "resolution">>) => Promise<BytesData>',
				description: "",
				optional: false,
			},
			{
				name: "setParent",
				type: "(nodeId: NodeId, parentId: NodeId, index?: number) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "addComponentInstance",
				type: "(options: {\n        url: string;\n        attributes?: Partial<Record<string, unknown>>;\n        parentId?: string;\n    }) => Promise<SomeNodeData>",
				description: "",
				optional: false,
			},
			{
				name: "addDetachedComponentLayers",
				type: "(options: {\n        url: string;\n        layout?: boolean;\n        attributes?: Partial<Record<string, unknown>>;\n    }) => Promise<SomeNodeData>",
				description: "",
				optional: false,
			},
			{
				name: "setDragData",
				type: "(dragSessionId: string, dragData: MessageApiDragData) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "onDragStart",
				type: "(info: DragStartInfo) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "onDrag",
				type: "(info: DragInfo) => Promise<string | null>",
				description: "",
				optional: false,
			},
			{
				name: "onDragEnd",
				type: "(info: DragEndInfo) => Promise<DragCompleteResult>",
				description: "",
				optional: false,
			},
			{
				name: "onPointerDown",
				type: "() => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "getActiveManagedCollection",
				type: "() => Promise<CollectionData>",
				description: "",
				optional: false,
			},
			{
				name: "getManagedCollection",
				type: "() => Promise<CollectionData>",
				description: "@deprecated Use getActiveManagedCollection",
				optional: false,
			},
			{
				name: "getManagedCollections",
				type: "() => Promise<CollectionData[]>",
				description: "",
				optional: false,
			},
			{
				name: "getManagedCollectionItemIds",
				type: "(id: NodeId) => Promise<string[]>",
				description: "",
				optional: false,
			},
			{
				name: "setManagedCollectionItemOrder",
				type: "(id: NodeId, ids: string[]) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "setManagedCollectionFields",
				type: "(id: NodeId, fields: ManagedCollectionFieldInputData[]) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "getManagedCollectionFields",
				type: "(id: NodeId) => Promise<ManagedCollectionField[]>",
				description: "",
				optional: false,
			},
			{
				name: "getManagedCollectionFields2",
				type: "(id: NodeId) => Promise<ManagedCollectionField[]>",
				description: "",
				optional: false,
			},
			{
				name: "addManagedCollectionItems",
				type: "(id: NodeId, items: ApiV2ManagedCollectionItemInput[]) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "addManagedCollectionItems2",
				type: "(id: NodeId, items: ManagedCollectionItemInput[]) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "removeManagedCollectionItems",
				type: "(id: NodeId, itemIds: string[]) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "createCollection",
				type: "(name: string) => Promise<CollectionData>",
				description: "",
				optional: false,
			},
			{
				name: "getCollection",
				type: "(id: NodeId) => Promise<CollectionData | null>",
				description: "",
				optional: false,
			},
			{
				name: "getActiveCollection",
				type: "() => Promise<CollectionData | null>",
				description: "",
				optional: false,
			},
			{
				name: "getCollections",
				type: "() => Promise<CollectionData[]>",
				description: "",
				optional: false,
			},
			{
				name: "getCollectionItems",
				type: "(id: NodeId) => Promise<ApiV2CollectionItemData[]>",
				description: "",
				optional: false,
			},
			{
				name: "getCollectionItems2",
				type: "(id: NodeId) => Promise<CollectionItemSerializableData[]>",
				description: "",
				optional: false,
			},
			{
				name: "setCollectionItemOrder",
				type: "(collectionId: NodeId, itemIds: NodeId[]) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "getCollectionFields",
				type: "(collectionId: string, includeDividers?: true) => Promise<FieldDefinitionData[]>",
				description: "",
				optional: false,
			},
			{
				name: "getCollectionFields2",
				type: "(collectionId: string, includeDividers?: true) => Promise<FieldDefinitionData[]>",
				description: "",
				optional: false,
			},
			{
				name: "addCollectionFields",
				type: "(collectionId: string, fields: FieldInput[]) => Promise<(FieldDefinitionData | null)[]>",
				description: "",
				optional: false,
			},
			{
				name: "addCollectionFields2",
				type: "(collectionId: string, fields: FieldInput[]) => Promise<(FieldDefinitionData | null)[]>",
				description: "",
				optional: false,
			},
			{
				name: "removeCollectionFields",
				type: "(collectionId: string, fieldIds: string[]) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "setCollectionFieldOrder",
				type: "(collectionId: string, fieldIds: string[]) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "addCollectionItems",
				type: "(id: NodeId, items: ApiV2CollectionItemInput[]) => Promise<ApiV2CollectionItemData[]>",
				description: "",
				optional: false,
			},
			{
				name: "addCollectionItems2",
				type: "(id: NodeId, items: CollectionItemInput[]) => Promise<CollectionItemSerializableData[]>",
				description: "",
				optional: false,
			},
			{
				name: "setCollectionItemAttributes",
				type: "(id: NodeId, attributes: ApiV2EditableCollectionItemAttributes) => Promise<ApiV2CollectionItemData | null>",
				description: "",
				optional: false,
			},
			{
				name: "setCollectionItemAttributes2",
				type: "(id: NodeId, attributes: EditableCollectionItemAttributes) => Promise<CollectionItemSerializableData | null>",
				description: "",
				optional: false,
			},
			{
				name: "setActiveCollection",
				type: "(collectionId: NodeId) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "removeCollectionItems",
				type: "(ids: NodeId[]) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "getActiveCollectionItemForWebPage",
				type: "(webPageNodeId: NodeId) => Promise<CollectionItemSerializableData | null>",
				description: "@alpha",
				optional: false,
			},
			{
				name: "addEnumCase",
				type: "(collectionId: string, fieldId: string, attributes: CreateEnumCase) => Promise<EnumCaseData | null>",
				description: "",
				optional: false,
			},
			{
				name: "updateEnumCase",
				type: "(collectionId: string, fieldId: string, caseId: string, attributes: UpdateEnumCase) => Promise<EnumCaseData | null>",
				description: "",
				optional: false,
			},
			{
				name: "removeEnumCase",
				type: "(collectionId: string, fieldId: string, caseId: string) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "setEnumCaseOrder",
				type: "(collectionId: string, fieldId: string, caseIds: string[]) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "getPluginDataForNode",
				type: "(id: NodeId, key: string) => Promise<string | null>",
				description: "",
				optional: false,
			},
			{
				name: "setPluginDataForNode",
				type: "(id: NodeId, key: string, value: string | null) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "getPluginDataKeysForNode",
				type: "(id: NodeId) => Promise<string[]>",
				description: "",
				optional: false,
			},
			{
				name: "getColorStyle",
				type: "(id: NodeId) => Promise<ColorStyleData | null>",
				description: "",
				optional: false,
			},
			{
				name: "getColorStyles",
				type: "() => Promise<ColorStyleData[]>",
				description: "",
				optional: false,
			},
			{
				name: "createColorStyle",
				type: "(attributes: Record<string, unknown>) => Promise<ColorStyleData>",
				description: "",
				optional: false,
			},
			{
				name: "setColorStyleAttributes",
				type: "(id: NodeId, update: Record<string, unknown>) => Promise<ColorStyleData | null>",
				description: "",
				optional: false,
			},
			{
				name: "removeColorStyle",
				type: "(id: NodeId) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "getTextStyle",
				type: "(id: NodeId) => Promise<TextStyleData | null>",
				description: "",
				optional: false,
			},
			{
				name: "getTextStyles",
				type: "() => Promise<TextStyleData[]>",
				description: "",
				optional: false,
			},
			{
				name: "createTextStyle",
				type: "(attributes: Record<string, unknown>) => Promise<TextStyleData>",
				description: "",
				optional: false,
			},
			{
				name: "setTextStyleAttributes",
				type: "(id: NodeId, update: Record<string, unknown>) => Promise<TextStyleData | null>",
				description: "",
				optional: false,
			},
			{
				name: "removeTextStyle",
				type: "(id: NodeId) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "getFont",
				type: "(family: string, attributes?: Record<string, unknown>) => Promise<FontData | null>",
				description: "",
				optional: false,
			},
			{
				name: "getFonts",
				type: "() => Promise<FontData[]>",
				description: "",
				optional: false,
			},
			{
				name: "unstable_createCodeFile",
				type: "(name: string, code: string) => Promise<CodeFileData>",
				description: "@deprecated",
				optional: false,
			},
			{
				name: "unstable_getCodeFiles",
				type: "() => Promise<readonly CodeFileData[]>",
				description: "@deprecated",
				optional: false,
			},
			{
				name: "unstable_getCodeFile",
				type: "(id: string) => Promise<CodeFileData | null>",
				description: "@deprecated",
				optional: false,
			},
			{
				name: "unstable_renameCodeFile",
				type: "(id: string, newName: string) => Promise<CodeFileData>",
				description: "@deprecated",
				optional: false,
			},
			{
				name: "unstable_removeCodeFile",
				type: "(id: string) => Promise<void>",
				description: "@deprecated",
				optional: false,
			},
			{
				name: "unstable_setCodeFileContent",
				type: "(id: string, code: string) => Promise<CodeFileData>",
				description: "@deprecated",
				optional: false,
			},
			{
				name: "unstable_getCodeFileVersions",
				type: "(id: string) => Promise<readonly CodeFileVersionData[]>",
				description: "@deprecated",
				optional: false,
			},
			{
				name: "unstable_getCodeFileVersionContent",
				type: "(fileId: string, versionId: string) => Promise<string>",
				description: "@deprecated",
				optional: false,
			},
			{
				name: "unstable_getCodeFileLint2",
				type: "(fileName: string, content: string, rules: LintConfig) => Promise<LintDiagnostic[]>",
				description: "@deprecated",
				optional: false,
			},
			{
				name: "unstable_getCodeFileTypecheck2",
				type: "(fileName: string, content: string, compilerOptions?: ts.server.protocol.CompilerOptions) => Promise<TypecheckDiagnostic[]>",
				description: "@deprecated",
				optional: false,
			},
			{
				name: "createCodeFile",
				type: "(name: string, code: string, options?: {\n        editViaPlugin?: boolean;\n    }) => Promise<CodeFileData>",
				description: "",
				optional: false,
			},
			{
				name: "getCodeFiles",
				type: "() => Promise<readonly CodeFileData[]>",
				description: "",
				optional: false,
			},
			{
				name: "getCodeFile",
				type: "(id: string) => Promise<CodeFileData | null>",
				description: "",
				optional: false,
			},
			{
				name: "renameCodeFile",
				type: "(id: string, newName: string) => Promise<CodeFileData>",
				description: "",
				optional: false,
			},
			{
				name: "removeCodeFile",
				type: "(id: string) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "setCodeFileContent",
				type: "(id: string, code: string) => Promise<CodeFileData>",
				description: "",
				optional: false,
			},
			{
				name: "getCodeFileVersions",
				type: "(id: string) => Promise<readonly CodeFileVersionData[]>",
				description: "",
				optional: false,
			},
			{
				name: "getCodeFileVersionContent",
				type: "(fileId: string, versionId: string) => Promise<string>",
				description: "",
				optional: false,
			},
			{
				name: "lintCode",
				type: "(fileName: string, content: string, rules: LintConfig) => Promise<LintDiagnostic[]>",
				description: "@deprecated The lintCode API was removed.",
				optional: false,
			},
			{
				name: "typecheckCode",
				type: "(fileName: string, content: string, compilerOptions?: ts.server.protocol.CompilerOptions, sessionId?: string) => Promise<TypecheckDiagnostic[]>",
				description: "",
				optional: false,
			},
			{
				name: "addRedirects",
				type: "(redirects: RedirectInput[]) => Promise<RedirectData[]>",
				description: "",
				optional: false,
			},
			{
				name: "getRedirects",
				type: "() => Promise<readonly RedirectData[]>",
				description: "",
				optional: false,
			},
			{
				name: "setRedirectOrder",
				type: "(redirectIds: string[]) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "removeRedirects",
				type: "(redirectIds: string[]) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "getRuntimeErrorForModule",
				type: "(moduleIdentifier: string) => Promise<string | null>",
				description:
					"@deprecated Use `getRuntimeErrorForCodeComponentNode` instead. Can be removed when Workshop is updated.",
				optional: false,
			},
			{
				name: "getRuntimeErrorForCodeComponentNode",
				type: "(nodeId: NodeId) => Promise<NodeRuntimeErrorResult | null>",
				description: "",
				optional: false,
			},
			{
				name: "addComponentInstancePlaceholder",
				type: "(attributes?: ComponentInstancePlaceholderAttributes) => Promise<ComponentInstancePlaceholderData>",
				description: "",
				optional: false,
			},
			{
				name: "updateComponentInstancePlaceholder",
				type: "(id: string, attributes: ComponentInstancePlaceholderAttributes) => Promise<ComponentInstancePlaceholderData | null>",
				description: "",
				optional: false,
			},
			{
				name: "removeComponentInstancePlaceholder",
				type: "(id: string) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "replaceComponentInstancePlaceholderWithComponentInstance",
				type: "(id: string, url: string, attributes?: Partial<EditableComponentInstanceNodeAttributes>) => Promise<SomeNodeData | null>",
				description: "",
				optional: false,
			},
			{
				name: "showProgressOnInstances",
				type: "(codeFileId: string, attributes?: ShowProgressOnInstancesAttributes) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "removeProgressFromInstances",
				type: "(codeFileId: string) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "setMenu",
				type: "(menuItems: MenuItemSerializable[]) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "showContextMenu",
				type: "(menuItems: MenuItemSerializable[], config: ContextMenuConfig) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "publish",
				type: "() => Promise<PublishResult>",
				description: "@alpha",
				optional: false,
			},
			{
				name: "getDeployments",
				type: "() => Promise<Deployment[]>",
				description: "@alpha",
				optional: false,
			},
			{
				name: "deploy",
				type: "(deploymentId: string, domains?: string[]) => Promise<Hostname[]>",
				description: "@alpha",
				optional: false,
			},
			{
				name: "getChangedPaths",
				type: "() => Promise<{\n        added: string[];\n        removed: string[];\n        modified: string[];\n    }>",
				description: "@alpha",
				optional: false,
			},
			{
				name: "getChangeContributors",
				type: "(fromVersion?: number, toVersion?: number) => Promise<string[]>",
				description: "@alpha",
				optional: false,
			},
			{
				name: "createManagedCollection",
				type: "(name: string) => Promise<CollectionData>",
				description: "@alpha",
				optional: false,
			},
			{
				name: "getAgentSystemPrompt",
				type: "() => Promise<string>",
				description: "@alpha",
				optional: false,
			},
			{
				name: "getAgentContext",
				type: "(options?: {\n        pagePath?: string;\n    }) => Promise<string>",
				description: "@alpha",
				optional: false,
			},
			{
				name: "readProjectForAgent",
				type: "(queries: Record<string, unknown>[], options?: {\n        pagePath?: string;\n    }) => Promise<{\n        results: unknown[];\n    }>",
				description: "@alpha",
				optional: false,
			},
			{
				name: "applyAgentChanges",
				type: "(dsl: string, options?: {\n        pagePath?: string;\n    }) => Promise<void>",
				description: "@alpha",
				optional: false,
			},
			{
				name: "[getAiServiceInfoMessageType]",
				type: "() => Promise<AiServiceInfo>",
				description: "",
				optional: false,
			},
			{
				name: "[sendTrackingEventMessageType]",
				type: "(key: string, value: string, identifier: string) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "[getHTMLForNodeMessageType]",
				type: "(nodeId: NodeId) => Promise<string | null>",
				description: "",
				optional: false,
			},
			{
				name: "[setHTMLForNodeMessageType]",
				type: "(nodeId: NodeId, html: string) => Promise<void>",
				description: "",
				optional: false,
			},
			{
				name: "getAiServiceInfo",
				type: "() => Promise<AiServiceInfo>",
				description: "@deprecated Use `getAiServiceInfoMessageType`.",
				optional: false,
			},
			{
				name: "sendTrackingEvent",
				type: "(key: string, value: string, identifier: string) => Promise<void>",
				description: "@deprecated Use `sendTrackingEventMessageType`.",
				optional: false,
			},
			{
				name: "addVariantToComponent",
				type: "(componentId: NodeId, basedOn: NodeId, attributes?: unknown) => Promise<SomeNodeData>",
				description: "@alpha",
				optional: false,
			},
			{
				name: "addGestureVariantToComponent",
				type: '(componentId: NodeId, nodeId: NodeId, type: "hover" | "pressed", attributes?: unknown) => Promise<SomeNodeData>',
				description: "@alpha",
				optional: false,
			},
			{
				name: "addBreakpointToWebPage",
				type: "(nodeId: NodeId, basedOn: NodeId, breakpoint: Breakpoint) => Promise<SomeNodeData>",
				description: "@alpha",
				optional: false,
			},
			{
				name: "getBreakpointSuggestionsForWebPage",
				type: "(nodeId: NodeId) => Promise<readonly Breakpoint[]>",
				description: "@alpha",
				optional: false,
			},
			{
				name: "getVariables",
				type: "(nodeId: string) => Promise<VariableData[]>",
				description: "@alpha",
				optional: false,
			},
			{
				name: "addVariables",
				type: "(nodeId: string, pluginCreateVariables: Marshaled<CreateVariable[]>) => Promise<VariableData[]>",
				description: "@alpha",
				optional: false,
			},
			{
				name: "updateVariable",
				type: "(nodeId: string, variableId: string, pluginUpdateVariable: Marshaled<UpdateVariable>) => Promise<VariableData | null>",
				description: "@alpha",
				optional: false,
			},
			{
				name: "removeVariables",
				type: "(nodeId: string, variableIds: string[]) => Promise<void>",
				description: "@alpha",
				optional: false,
			},
			{
				name: "setVariableOrder",
				type: "(nodeId: string, variableIds: string[]) => Promise<void>",
				description: "@alpha",
				optional: false,
			},
			{
				name: "getVectorSets",
				type: "() => Promise<VectorSetData[]>",
				description: "@alpha",
				optional: false,
			},
			{
				name: "getVectorSetItems",
				type: "(vectorSetId: string) => Promise<VectorSetItemData[]>",
				description: "@alpha",
				optional: false,
			},
			{
				name: "getVectorSetItemVariables",
				type: "(vectorSetItemId: string, moduleId: string) => Promise<VectorSetItemVariable[]>",
				description: "@alpha",
				optional: false,
			},
			{
				name: "createDesignPage",
				type: "(pageName: string) => Promise<SomeNodeData>",
				description: "",
				optional: false,
			},
			{
				name: "createWebPage",
				type: "(pagePath: string) => Promise<SomeNodeData>",
				description: "",
				optional: false,
			},
		],
	},
	pluginnodeclass: {
		name: "PluginNodeClass",
		description: "",
		kind: "alias",
		alias: "OtherNodeType | CreateNodeType$1",
		references: ["OtherNodeType", "CreateNodeType$1"],
	},
	position: {
		name: "Position",
		description: "The CSS position property for a node.",
		kind: "alias",
		alias: '"relative" | "absolute" | "fixed" | "sticky"',
		references: [],
	},
	postmessage: {
		name: "PostMessage",
		description: "",
		kind: "alias",
		alias:
			"(message: PluginToVekterMessage, transfer?: Transferable[] | undefined) => void",
		references: [],
	},
	prettify: {
		name: "Prettify",
		description:
			"This alias takes a type as its argument and returns a new type that has the same properties as\nthe original, but the properties are not intersected. This makes the new type easier to read and\nunderstand.\n\nExample:\n```ts\n// Original type:\n{ a: string; } & { b: number; } & { c: boolean; }\n\n// New type:\n{ a: string; b: number; c: boolean; }\n```",
		kind: "alias",
		alias:
			"{\n    [K in keyof T]: T[K] extends object ? Prettify<T[K]> : T[K];\n} & {}",
		references: [],
	},
	projectinfo: {
		name: "ProjectInfo",
		description: "",
		kind: "interface",
		references: ["ApiVersion1ProjectInfo"],
		members: [
			{
				name: "apiVersion1Id",
				type: "string",
				description:
					"Hashed project id served by API version 1, use for migration only",
				optional: false,
			},
		],
		extends: ["ApiVersion1ProjectInfo"],
	},
	protectedmessagetype: {
		name: "ProtectedMessageType",
		description: "",
		kind: "alias",
		alias: "Exclude<keyof PluginMessageAPI, UnprotectedMessageType>",
		references: ["Exclude", "PluginMessageAPI", "UnprotectedMessageType"],
	},
	protectedmethod: {
		name: "ProtectedMethod",
		description: "",
		kind: "alias",
		alias: "AllMethods & string",
		references: ["AllMethods"],
	},
	publish: {
		name: "Publish",
		description: "",
		kind: "interface",
		references: ["OptimizationStatus"],
		members: [
			{
				name: "deploymentTime",
				type: "number",
				description: "",
				optional: false,
			},
			{
				name: "optimizationStatus",
				type: "OptimizationStatus",
				description: "",
				optional: false,
			},
			{
				name: "url",
				type: "string",
				description: "",
				optional: false,
			},
			{
				name: "currentPageUrl",
				type: "string",
				description: "",
				optional: false,
			},
		],
	},
	publishinfo: {
		name: "PublishInfo",
		description: "",
		kind: "interface",
		references: ["Publish"],
		members: [
			{
				name: "production",
				type: "Publish | null",
				description: "",
				optional: false,
			},
			{
				name: "staging",
				type: "Publish | null",
				description: "",
				optional: false,
			},
		],
	},
	publishresult: {
		name: "PublishResult",
		description: "",
		kind: "interface",
		references: ["Deployment", "Hostname"],
		members: [
			{
				name: "deployment",
				type: "Deployment",
				description: "",
				optional: false,
			},
			{
				name: "hostnames",
				type: "Hostname[]",
				description: "",
				optional: false,
			},
		],
	},
	radialgradientdata: {
		name: "RadialGradientData",
		description: "",
		kind: "interface",
		references: [
			"BaseGradientData",
			"RadialGradientType",
			"CSSDimension",
			"CSSUnit.Percentage",
		],
		members: [
			{
				name: "[classKey]",
				type: "RadialGradientType",
				description: "",
				optional: false,
			},
			{
				name: "width",
				type: "CSSDimension<CSSUnit.Percentage>",
				description: "",
				optional: false,
			},
			{
				name: "height",
				type: "CSSDimension<CSSUnit.Percentage>",
				description: "",
				optional: false,
			},
			{
				name: "x",
				type: "CSSDimension<CSSUnit.Percentage>",
				description: "",
				optional: false,
			},
			{
				name: "y",
				type: "CSSDimension<CSSUnit.Percentage>",
				description: "",
				optional: false,
			},
		],
		extends: ["BaseGradientData"],
	},
	radialgradienttype: {
		name: "RadialGradientType",
		description: "",
		kind: "alias",
		alias: '"RadialGradient"',
		references: [],
	},
	rect$1: {
		name: "Rect$1",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "x",
				type: "number",
				description: "",
				optional: false,
			},
			{
				name: "y",
				type: "number",
				description: "",
				optional: false,
			},
			{
				name: "width",
				type: "number",
				description: "",
				optional: false,
			},
			{
				name: "height",
				type: "number",
				description: "",
				optional: false,
			},
		],
	},
	redirectattributes: {
		name: "RedirectAttributes",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "from",
				type: "string",
				description: "The source path to redirect from",
				optional: false,
			},
			{
				name: "expandToAllLocales",
				type: "boolean",
				description: "Whether to expand the redirect to all locales",
				optional: false,
			},
		],
	},
	redirectinput: {
		name: "RedirectInput",
		description: "",
		kind: "alias",
		alias: "Prettify<CreateRedirect | UpdateRedirect>",
		references: ["Prettify", "CreateRedirect", "UpdateRedirect"],
	},
	rel: {
		name: "Rel",
		description: "",
		kind: "alias",
		alias: '"nofollow" | "noreferrer" | "me" | "ugc" | "sponsored"',
		references: [],
	},
	relativenumber: {
		name: "RelativeNumber",
		description: "",
		kind: "alias",
		alias: "`${number}%`",
		references: [],
	},
	relativeorfourpixelnumbershorthand: {
		name: "RelativeOrFourPixelNumberShorthand",
		description: "",
		kind: "alias",
		alias: "RelativeNumber | FourPixelNumberShorthand",
		references: ["RelativeNumber", "FourPixelNumberShorthand"],
	},
	releasechannel: {
		name: "ReleaseChannel",
		description: "",
		kind: "alias",
		alias: '"alpha" | "beta" | "stable"',
		references: [],
	},
	requiredcolorstyleattributes: {
		name: "RequiredColorStyleAttributes",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "light",
				type: "string",
				description: "",
				optional: false,
			},
		],
	},
	resolution: {
		name: "Resolution",
		description: "",
		kind: "alias",
		alias: '"auto" | "lossless" | "small" | "medium" | "large" | "full"',
		references: [],
	},
	screenshotoptions: {
		name: "ScreenshotOptions",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "format",
				type: '"png" | "jpeg"',
				description: 'Image format.\n@default "png"',
				optional: true,
			},
			{
				name: "quality",
				type: "number",
				description:
					'JPEG quality (0-100).\nOnly applies when format is "jpeg".\n@default 100',
				optional: true,
			},
			{
				name: "scale",
				type: "0.5 | 1 | 1.5 | 2 | 3 | 4",
				description:
					"Pixel density multiplier for retina/HiDPI screenshots.\n@default 1",
				optional: true,
			},
			{
				name: "clip",
				type: "{\n        x: number;\n        y: number;\n        width: number;\n        height: number;\n    }",
				description:
					"Clip region in CSS pixels (before scale).\nCaptures only this portion of the node.",
				optional: true,
			},
		],
	},
	screenshotresult: {
		name: "ScreenshotResult",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "data",
				type: "Buffer",
				description: "",
				optional: false,
			},
			{
				name: "mimeType",
				type: "string",
				description: "",
				optional: false,
			},
		],
	},
	scrollsectioncontrol: {
		name: "ScrollSectionControl",
		description: "",
		kind: "interface",
		references: ["ControlBase", "ScrollSectionSelector", "UnsupportedVariable"],
		members: [
			{
				name: "type",
				type: '"scrollSection"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "ScrollSectionSelector | UnsupportedVariable | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	scrollsectionselector: {
		name: "ScrollSectionSelector",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "targetNodeId",
				type: "string",
				description: "",
				optional: false,
			},
		],
		extends: ["Partial"],
	},
	separatormenuitem: {
		name: "SeparatorMenuItem",
		description: "A visual separator between menu items.",
		kind: "interface",
		references: [],
		members: [
			{
				name: "type",
				type: '"separator"',
				description: "",
				optional: false,
			},
		],
	},
	setcustomcodeoptions: {
		name: "SetCustomCodeOptions",
		description:
			"Options for setting custom HTML code on the site. A plugin can only set custom code once per location.",
		kind: "interface",
		references: ["CustomCodeLocation"],
		members: [
			{
				name: "html",
				type: "string | null",
				description: "",
				optional: false,
			},
			{
				name: "location",
				type: "CustomCodeLocation",
				description: "",
				optional: false,
			},
		],
	},
	setlocalizationdataresult: {
		name: "SetLocalizationDataResult",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "valuesBySource",
				type: "{\n        errors: readonly LocalizationValueError[];\n    }",
				description: "Set one or more localized values",
				optional: false,
			},
			{
				name: "statusByLocaleByGroup",
				type: "{\n        errors: readonly LocalizationStatusByLocaleError[];\n    }",
				description:
					"Set the hidden locale IDs of one or more localization groups",
				optional: false,
			},
		],
	},
	shadow: {
		name: "Shadow",
		description: "",
		kind: "interface",
		references: ["ColorStyle"],
		members: [
			{
				name: "type",
				type: '"box" | "realistic"',
				description: "",
				optional: false,
			},
			{
				name: "inset",
				type: "boolean",
				description: "",
				optional: false,
			},
			{
				name: "color",
				type: "string | ColorStyle",
				description: "",
				optional: false,
			},
			{
				name: "x",
				type: "number",
				description: "",
				optional: false,
			},
			{
				name: "y",
				type: "number",
				description: "",
				optional: false,
			},
			{
				name: "blur",
				type: "number",
				description: "",
				optional: false,
			},
			{
				name: "spread",
				type: "number",
				description: "",
				optional: false,
			},
			{
				name: "diffusion",
				type: "number",
				description: "",
				optional: false,
			},
			{
				name: "focus",
				type: "number",
				description: "",
				optional: false,
			},
		],
	},
	shadowcontrol: {
		name: "ShadowControl",
		description: "",
		kind: "interface",
		references: [
			"ControlBase",
			"Shadow",
			"UnsupportedVariable",
			"UnsupportedComputedValue",
		],
		members: [
			{
				name: "type",
				type: '"shadow"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "readonly Shadow[] | UnsupportedVariable | UnsupportedComputedValue | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	showprogressoninstancesattributes: {
		name: "ShowProgressOnInstancesAttributes",
		description: "@alpha",
		kind: "alias",
		alias:
			'Pick<ComponentInstancePlaceholderAttributes, "title" | "codePreview">',
		references: ["ComponentInstancePlaceholderAttributes"],
	},
	size: {
		name: "Size",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "width",
				type: "number",
				description:
					"Same as [HTMLImageElement.naturalWidth](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/naturalWidth).\n\n**Warning**: May be zero!",
				optional: false,
			},
			{
				name: "height",
				type: "number",
				description:
					"Same as [HTMLImageElement.naturalHeight](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/naturalHeight).\n\n**Warning**: May be zero!",
				optional: false,
			},
		],
	},
	slotcontrol: {
		name: "SlotControl",
		description: "",
		kind: "interface",
		references: ["ControlBase", "SlotItem"],
		members: [
			{
				name: "type",
				type: '"slot"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "readonly SlotItem[] | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	slotitem: {
		name: "SlotItem",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "id",
				type: "string",
				description: "",
				optional: false,
			},
			{
				name: "nodeId",
				type: "string | undefined",
				description: "",
				optional: true,
			},
		],
	},
	stackalignment: {
		name: "StackAlignment",
		description: "How children are aligned along the cross axis of a stack.",
		kind: "alias",
		alias: '"start" | "center" | "end"',
		references: [],
	},
	stackdirection: {
		name: "StackDirection",
		description: "The direction children are laid out in a stack.",
		kind: "alias",
		alias: '"horizontal" | "vertical"',
		references: [],
	},
	stackdistribution: {
		name: "StackDistribution",
		description: "How children are distributed along the main axis of a stack.",
		kind: "alias",
		alias:
			'"start" | "center" | "end" | "space-between" | "space-around" | "space-evenly"',
		references: [],
	},
	stacklayout: {
		name: "StackLayout",
		description: "",
		kind: "interface",
		references: ["StackDirection", "StackDistribution", "StackAlignment"],
		members: [
			{
				name: "stackDirection",
				type: "StackDirection | null",
				description:
					'Direction of items in a stack layout. Requires `layout: "stack"`. Supported by FrameNode.',
				optional: false,
			},
			{
				name: "stackDistribution",
				type: "StackDistribution | null",
				description:
					'How items are distributed in a stack layout. Requires `layout: "stack"`. Supported by FrameNode.',
				optional: false,
			},
			{
				name: "stackAlignment",
				type: "StackAlignment | null",
				description:
					'How items are aligned perpendicular to the stack direction. Requires `layout: "stack"`. Supported by FrameNode.',
				optional: false,
			},
			{
				name: "stackWrapEnabled",
				type: "boolean | null",
				description:
					'Whether items should wrap to the next line. Requires `layout: "stack"`. Supported by FrameNode.',
				optional: false,
			},
		],
	},
	stringcontrol: {
		name: "StringControl",
		description: "",
		kind: "interface",
		references: [
			"ControlBase",
			"StringVariable",
			"UnsupportedVariable",
			"UnsupportedComputedValue",
		],
		members: [
			{
				name: "type",
				type: '"string"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "string | StringVariable | UnsupportedVariable | UnsupportedComputedValue | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	stringfieldbase: {
		name: "StringFieldBase",
		description: "",
		kind: "interface",
		references: ["StringFieldType"],
		members: [
			{
				name: "type",
				type: "StringFieldType",
				description: "",
				optional: false,
			},
		],
	},
	stringfielddataentry: {
		name: "StringFieldDataEntry",
		description: "",
		kind: "interface",
		references: ["StringFieldType", "InlineLocalizationValueByLocale"],
		members: [
			{
				name: "type",
				type: "StringFieldType",
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "string",
				description: "",
				optional: false,
			},
			{
				name: "valueByLocale",
				type: "InlineLocalizationValueByLocale",
				description: "",
				optional: false,
			},
		],
	},
	stringfielddataentryinput: {
		name: "StringFieldDataEntryInput",
		description: "",
		kind: "interface",
		references: ["StringFieldType", "LocalizationSourceUpdate"],
		members: [
			{
				name: "type",
				type: "StringFieldType",
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "string",
				description: "",
				optional: false,
			},
			{
				name: "valueByLocale",
				type: "LocalizationSourceUpdate",
				description: "",
				optional: true,
			},
		],
	},
	stringfielddefinitiondata: {
		name: "StringFieldDefinitionData",
		description: "",
		kind: "interface",
		references: [
			"StringFieldBase",
			"WithFieldRequired",
			"WithFieldBasedOn",
			"FieldDefinitionBase",
		],
		extends: [
			"StringFieldBase",
			"WithFieldRequired",
			"WithFieldBasedOn",
			"FieldDefinitionBase",
		],
	},
	stringfieldtype: {
		name: "StringFieldType",
		description: "",
		kind: "alias",
		alias: '"string"',
		references: [],
	},
	stringvariabledata: {
		name: "StringVariableData",
		description: "",
		kind: "interface",
		references: [
			"WithStringVariableClass",
			"BaseVariableData",
			"WithStringDefaultValue",
		],
		extends: [
			"WithStringVariableClass",
			"BaseVariableData",
			"WithStringDefaultValue",
		],
	},
	supportedfielddefinitiondata: {
		name: "SupportedFieldDefinitionData",
		description:
			"A collection field that Framer knows about and the plugin API fully supports.",
		kind: "alias",
		alias:
			"BooleanFieldDefinitionData | ColorFieldDefinitionData | NumberFieldDefinitionData | StringFieldDefinitionData | FormattedTextFieldDefinitionData | ImageFieldDefinitionData | LinkFieldDefinitionData | DateFieldDefinitionData | FileFieldDefinitionData | EnumFieldDefinitionData | CollectionReferenceFieldDefinitionData | MultiCollectionReferenceFieldDefinitionData | ArrayFieldDefinitionData",
		references: [
			"BooleanFieldDefinitionData",
			"ColorFieldDefinitionData",
			"NumberFieldDefinitionData",
			"StringFieldDefinitionData",
			"FormattedTextFieldDefinitionData",
			"ImageFieldDefinitionData",
			"LinkFieldDefinitionData",
			"DateFieldDefinitionData",
			"FileFieldDefinitionData",
			"EnumFieldDefinitionData",
			"CollectionReferenceFieldDefinitionData",
			"MultiCollectionReferenceFieldDefinitionData",
			"ArrayFieldDefinitionData",
		],
	},
	svgdata: {
		name: "SVGData",
		description: "",
		kind: "interface",
		references: ["WithOptionalName"],
		members: [
			{
				name: "svg",
				type: "string",
				description: "",
				optional: false,
			},
		],
		extends: ["WithOptionalName"],
	},
	textalignment: {
		name: "TextAlignment",
		description: "",
		kind: "alias",
		alias: '"left" | "center" | "right" | "justify"',
		references: [],
	},
	textdecoration: {
		name: "TextDecoration",
		description: "",
		kind: "alias",
		alias: '"none" | "underline" | "line-through"',
		references: [],
	},
	textdecorationskipink: {
		name: "TextDecorationSkipInk",
		description: "",
		kind: "alias",
		alias: '"none" | "all" | "auto"',
		references: [],
	},
	textdecorationstyle: {
		name: "TextDecorationStyle",
		description: "",
		kind: "alias",
		alias: '"solid" | "double" | "dotted" | "dashed" | "wavy"',
		references: [],
	},
	textnodetag: {
		name: "TextNodeTag",
		description: "",
		kind: "alias",
		alias: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"',
		references: [],
	},
	textstyleattributes: {
		name: "TextStyleAttributes",
		description: "",
		kind: "alias",
		alias:
			'Prettify<Partial<Omit<TextStyleData, "id" | "color" | "font" | "boldFont" | "italicFont" | "boldItalicFont" | "breakpoints"> & {\n    color: ColorStyle | string;\n    font: Font;\n    boldFont: Font | null;\n    italicFont: Font | null;\n    boldItalicFont: Font | null;\n    breakpoints: TextStyleBreakpointAttributes[];\n}> & AssetPath>',
		references: ["Prettify", "TextStyleData", "AssetPath"],
	},
	textstylebreakpoint: {
		name: "TextStyleBreakpoint",
		description: "",
		kind: "alias",
		alias: "Prettify<TextStyleBreakpointData>",
		references: ["Prettify", "TextStyleBreakpointData"],
	},
	textstylebreakpointdata: {
		name: "TextStyleBreakpointData",
		description: "",
		kind: "interface",
		references: [
			"CSSDimension",
			"CSSUnit.Pixel",
			"CSSUnit.Rem",
			"CSSUnit.Em",
			"CSSUnit.Percentage",
		],
		members: [
			{
				name: "minWidth",
				type: "number",
				description:
					"How big does the window width need to be for this breakpoint's styles to\ntake affect.\n\nThis must be unique for each breakpoint.",
				optional: false,
			},
			{
				name: "fontSize",
				type: "CSSDimension<CSSUnit.Pixel | CSSUnit.Rem>",
				description: "Size of the text at this breakpoint.",
				optional: false,
			},
			{
				name: "letterSpacing",
				type: "CSSDimension<CSSUnit.Pixel | CSSUnit.Em>",
				description:
					"Size of the space between each letter at this breakpoint.",
				optional: false,
			},
			{
				name: "lineHeight",
				type: "CSSDimension<CSSUnit.Pixel | CSSUnit.Em | CSSUnit.Percentage>",
				description:
					"Size of the space between each line of text at this breakpoint.",
				optional: false,
			},
			{
				name: "paragraphSpacing",
				type: "number",
				description:
					"Size of the space between each paragraph at this breakpoint.",
				optional: false,
			},
		],
	},
	textstyledata: {
		name: "TextStyleData",
		description: "",
		kind: "interface",
		references: [
			"TextStyleBreakpointData",
			"TextStyleTag",
			"ColorStyleData",
			"FontData",
			"TextTransform",
			"TextAlignment",
			"TextDecoration",
			"CSSDimension",
			"CSSUnit.Pixel",
			"CSSUnit.Em",
			"TextDecorationStyle",
			"TextDecorationSkipInk",
		],
		members: [
			{
				name: "[classKey]",
				type: "typeof textStyleDiscriminator",
				description: "",
				optional: false,
			},
			{
				name: "id",
				type: "NodeId",
				description: "",
				optional: false,
			},
			{
				name: "name",
				type: "string",
				description: "",
				optional: false,
			},
			{
				name: "path",
				type: "string",
				description: "",
				optional: false,
			},
			{
				name: "tag",
				type: "TextStyleTag",
				description: "",
				optional: false,
			},
			{
				name: "color",
				type: "ColorStyleData | string",
				description: "",
				optional: false,
			},
			{
				name: "font",
				type: "FontData",
				description: "",
				optional: false,
			},
			{
				name: "boldFont",
				type: "FontData | null",
				description: "",
				optional: false,
			},
			{
				name: "italicFont",
				type: "FontData | null",
				description: "",
				optional: false,
			},
			{
				name: "boldItalicFont",
				type: "FontData | null",
				description: "",
				optional: false,
			},
			{
				name: "transform",
				type: "TextTransform",
				description: "",
				optional: false,
			},
			{
				name: "alignment",
				type: "TextAlignment",
				description: "",
				optional: false,
			},
			{
				name: "decoration",
				type: "TextDecoration",
				description: "",
				optional: false,
			},
			{
				name: "decorationColor",
				type: "ColorStyleData | string",
				description: "",
				optional: false,
			},
			{
				name: "decorationThickness",
				type: '"auto" | CSSDimension<CSSUnit.Pixel | CSSUnit.Em>',
				description: "",
				optional: false,
			},
			{
				name: "decorationStyle",
				type: "TextDecorationStyle",
				description: "",
				optional: false,
			},
			{
				name: "decorationSkipInk",
				type: "TextDecorationSkipInk",
				description: "",
				optional: false,
			},
			{
				name: "decorationOffset",
				type: '"auto" | CSSDimension<CSSUnit.Pixel | CSSUnit.Em>',
				description: "",
				optional: false,
			},
			{
				name: "balance",
				type: "boolean",
				description: "",
				optional: false,
			},
			{
				name: "breakpoints",
				type: "TextStyleBreakpointData[]",
				description: "",
				optional: false,
			},
		],
		extends: ["TextStyleBreakpointData"],
	},
	textstyletag: {
		name: "TextStyleTag",
		description: "",
		kind: "alias",
		alias: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"',
		references: [],
	},
	texttransform: {
		name: "TextTransform",
		description: "",
		kind: "alias",
		alias: '"none" | "inherit" | "capitalize" | "uppercase" | "lowercase"',
		references: [],
	},
	trackingidcontrol: {
		name: "TrackingIdControl",
		description: "",
		kind: "interface",
		references: ["ControlBase", "UnsupportedVariable"],
		members: [
			{
				name: "type",
				type: '"trackingId"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "string | UnsupportedVariable | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	transition: {
		name: "Transition",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "type",
				type: '"spring" | "tween" | "inertia" | false',
				description: "",
				optional: false,
			},
			{
				name: "ease",
				type: "[number, number, number, number]",
				description: "",
				optional: false,
			},
			{
				name: "duration",
				type: "number",
				description: "",
				optional: false,
			},
			{
				name: "delay",
				type: "number",
				description: "",
				optional: false,
			},
			{
				name: "stiffness",
				type: "number",
				description: "",
				optional: false,
			},
			{
				name: "damping",
				type: "number",
				description: "",
				optional: false,
			},
			{
				name: "mass",
				type: "number",
				description: "",
				optional: false,
			},
			{
				name: "durationBasedSpring",
				type: "boolean",
				description: "",
				optional: true,
			},
			{
				name: "bounce",
				type: "number",
				description: "",
				optional: true,
			},
			{
				name: "stagger",
				type: "number",
				description: "",
				optional: true,
			},
		],
	},
	transitioncontrol: {
		name: "TransitionControl",
		description: "",
		kind: "interface",
		references: ["ControlBase", "Transition", "UnsupportedVariable"],
		members: [
			{
				name: "type",
				type: '"transition"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "Transition | UnsupportedVariable | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	twopixelnumbershorthand: {
		name: "TwoPixelNumberShorthand",
		description: "",
		kind: "alias",
		alias: "PixelNumber | `${PixelNumber} ${PixelNumber}`",
		references: ["PixelNumber"],
	},
	typecheckdiagnostic: {
		name: "TypecheckDiagnostic",
		description: "A diagnostic produced by type-checking a code file.",
		kind: "interface",
		references: ["DiagnosticBase", "DiagnosticSpan", "ts.DiagnosticCategory"],
		members: [
			{
				name: "span",
				type: "DiagnosticSpan",
				description:
					"The span of the invalid code in the file.\nCould be undefined if the diagnostic is system-level (and not file-specific), like e.g. an error about invalid TS options.",
				optional: true,
			},
			{
				name: "fileName",
				type: "string",
				description:
					"Source file name. Could be undefined if the diagnostic is system-level (and not file-specific), like e.g. an error about invalid TS options.",
				optional: true,
			},
			{
				name: "code",
				type: "number",
				description: "TypeScript error code.",
				optional: false,
			},
			{
				name: "category",
				type: "ts.DiagnosticCategory",
				description: "Error category from the TypeScript compiler.",
				optional: false,
			},
		],
		extends: ["DiagnosticBase"],
	},
	uioptions: {
		name: "UIOptions",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "width",
				type: "number",
				description: "The preferred UI width.",
				optional: true,
			},
			{
				name: "height",
				type: "number",
				description: "The preferred UI height.",
				optional: true,
			},
			{
				name: "position",
				type: '"center" | "top left" | "bottom left" | "top right" | "bottom right"',
				description: "The initial window position, defaults to top left.",
				optional: true,
			},
			{
				name: "resizable",
				type: 'true | false | "width" | "height"',
				description: "Whether the UI is resizable.",
				optional: true,
			},
			{
				name: "minWidth",
				type: "number",
				description: "Minimum UI width.",
				optional: true,
			},
			{
				name: "minHeight",
				type: "number",
				description: "Minimum UI height.",
				optional: true,
			},
			{
				name: "maxWidth",
				type: "number",
				description: "Maximum UI width.",
				optional: true,
			},
			{
				name: "maxHeight",
				type: "number",
				description: "Maximum UI height.",
				optional: true,
			},
		],
	},
	unmarshaledconicgradient: {
		name: "UnmarshaledConicGradient",
		description: "",
		kind: "interface",
		references: [
			"UnmarshaledGradientBase",
			"ConicGradientType",
			"CSSDimension",
			"CSSUnit.Percentage",
		],
		members: [
			{
				name: "[classKey]",
				type: "ConicGradientType",
				description: "",
				optional: false,
			},
			{
				name: "angle",
				type: "number",
				description: "",
				optional: false,
			},
			{
				name: "x",
				type: "CSSDimension<CSSUnit.Percentage>",
				description: "",
				optional: false,
			},
			{
				name: "y",
				type: "CSSDimension<CSSUnit.Percentage>",
				description: "",
				optional: false,
			},
		],
		extends: ["UnmarshaledGradientBase"],
	},
	unmarshaledgradient: {
		name: "UnmarshaledGradient",
		description: "",
		kind: "alias",
		alias:
			"UnmarshaledLinearGradient | UnmarshaledRadialGradient | UnmarshaledConicGradient",
		references: [
			"UnmarshaledLinearGradient",
			"UnmarshaledRadialGradient",
			"UnmarshaledConicGradient",
		],
	},
	unmarshaledgradientbase: {
		name: "UnmarshaledGradientBase",
		description: "",
		kind: "interface",
		references: ["ColorStop"],
		members: [
			{
				name: "stops",
				type: "readonly ColorStop[]",
				description: "",
				optional: false,
			},
		],
	},
	unmarshaledlineargradient: {
		name: "UnmarshaledLinearGradient",
		description: "",
		kind: "interface",
		references: ["UnmarshaledGradientBase", "LinearGradientType"],
		members: [
			{
				name: "[classKey]",
				type: "LinearGradientType",
				description: "",
				optional: false,
			},
			{
				name: "angle",
				type: "number",
				description: "",
				optional: false,
			},
		],
		extends: ["UnmarshaledGradientBase"],
	},
	unmarshaledradialgradient: {
		name: "UnmarshaledRadialGradient",
		description: "",
		kind: "interface",
		references: [
			"UnmarshaledGradientBase",
			"RadialGradientType",
			"CSSDimension",
			"CSSUnit.Percentage",
		],
		members: [
			{
				name: "[classKey]",
				type: "RadialGradientType",
				description: "",
				optional: false,
			},
			{
				name: "width",
				type: "CSSDimension<CSSUnit.Percentage>",
				description: "",
				optional: false,
			},
			{
				name: "height",
				type: "CSSDimension<CSSUnit.Percentage>",
				description: "",
				optional: false,
			},
			{
				name: "x",
				type: "CSSDimension<CSSUnit.Percentage>",
				description: "",
				optional: false,
			},
			{
				name: "y",
				type: "CSSDimension<CSSUnit.Percentage>",
				description: "",
				optional: false,
			},
		],
		extends: ["UnmarshaledGradientBase"],
	},
	unprotectedmessagetype: {
		name: "UnprotectedMessageType",
		description: "",
		kind: "alias",
		alias: "(typeof unprotectedMessageTypesSource)[number]",
		references: [],
	},
	unsubscribe$1: {
		name: "Unsubscribe$1",
		description: "",
		kind: "alias",
		alias: "VoidFunction",
		references: ["VoidFunction"],
	},
	unsupportedcomputedvaluedata: {
		name: "UnsupportedComputedValueData",
		description: "",
		kind: "alias",
		alias: "WithUnsupportedComputedValueClass",
		references: ["WithUnsupportedComputedValueClass"],
	},
	unsupportedfieldbase: {
		name: "UnsupportedFieldBase",
		description: "",
		kind: "interface",
		references: ["UnsupportedFieldType"],
		members: [
			{
				name: "type",
				type: "UnsupportedFieldType",
				description: "",
				optional: false,
			},
		],
	},
	unsupportedfieldtype: {
		name: "UnsupportedFieldType",
		description: "",
		kind: "alias",
		alias: '"unsupported"',
		references: [],
	},
	unsupportedvariabledata: {
		name: "UnsupportedVariableData",
		description: "",
		kind: "interface",
		references: ["WithUnsupportedVariableClass", "BaseVariableData"],
		extends: ["WithUnsupportedVariableClass", "BaseVariableData"],
	},
	updatearrayfield: {
		name: "UpdateArrayField",
		description: "",
		kind: "interface",
		references: [
			"ArrayFieldBase",
			"UpdateFieldBase",
			"WithOptionalFieldRequired",
			"CreateArrayItemField",
		],
		members: [
			{
				name: "fields",
				type: "[CreateArrayItemField]",
				description: "",
				optional: true,
			},
		],
		extends: ["ArrayFieldBase", "UpdateFieldBase", "WithOptionalFieldRequired"],
	},
	updatearrayitem: {
		name: "UpdateArrayItem",
		description: "",
		kind: "interface",
		references: ["EditableArrayItemAttributes"],
		members: [
			{
				name: "id",
				type: "string",
				description: "The ID of an existing item if updating. Omit if adding.",
				optional: false,
			},
		],
		extends: ["EditableArrayItemAttributes"],
	},
	updatebooleanfield: {
		name: "UpdateBooleanField",
		description: "",
		kind: "interface",
		references: ["BooleanFieldBase", "UpdateFieldBase"],
		extends: ["BooleanFieldBase", "UpdateFieldBase"],
	},
	updatebooleanvariable: {
		name: "UpdateBooleanVariable",
		description: "",
		kind: "interface",
		references: ["WithBooleanVariableType", "UpdateVariableBase"],
		extends: ["WithBooleanVariableType", "UpdateVariableBase", "Partial"],
	},
	updatebordervariable: {
		name: "UpdateBorderVariable",
		description: "",
		kind: "interface",
		references: ["WithBorderVariableType", "UpdateVariableBase"],
		extends: ["WithBorderVariableType", "UpdateVariableBase", "Partial"],
	},
	updatecollectionreferencefield: {
		name: "UpdateCollectionReferenceField",
		description: "",
		kind: "interface",
		references: [
			"CollectionReferenceFieldBase",
			"UpdateFieldBase",
			"WithOptionalFieldRequired",
		],
		extends: [
			"CollectionReferenceFieldBase",
			"UpdateFieldBase",
			"WithOptionalFieldRequired",
		],
	},
	updatecolorfield: {
		name: "UpdateColorField",
		description: "",
		kind: "interface",
		references: ["ColorFieldBase", "UpdateFieldBase"],
		extends: ["ColorFieldBase", "UpdateFieldBase"],
	},
	updatecolorvariable: {
		name: "UpdateColorVariable",
		description: "",
		kind: "interface",
		references: ["WithColorVariableType", "UpdateVariableBase"],
		extends: ["WithColorVariableType", "UpdateVariableBase", "Partial"],
	},
	updatedatefield: {
		name: "UpdateDateField",
		description: "",
		kind: "interface",
		references: [
			"DateFieldBase",
			"UpdateFieldBase",
			"WithOptionalFieldRequired",
		],
		extends: ["DateFieldBase", "UpdateFieldBase", "WithOptionalFieldRequired"],
	},
	updatedatevariable: {
		name: "UpdateDateVariable",
		description: "",
		kind: "interface",
		references: ["WithDateVariableType", "UpdateVariableBase"],
		extends: [
			"WithDateVariableType",
			"UpdateVariableBase",
			"Partial",
			"Partial",
		],
	},
	updateenumcase: {
		name: "UpdateEnumCase",
		description: "",
		kind: "interface",
		references: [],
		extends: ["Partial", "Partial"],
	},
	updateenumfield: {
		name: "UpdateEnumField",
		description: "",
		kind: "interface",
		references: ["EnumFieldBase", "UpdateFieldBase"],
		extends: ["EnumFieldBase", "UpdateFieldBase"],
	},
	updateenumvariable: {
		name: "UpdateEnumVariable",
		description: "",
		kind: "interface",
		references: ["WithEnumVariableType", "UpdateVariableBase"],
		extends: ["WithEnumVariableType", "UpdateVariableBase", "Partial"],
	},
	updatefield: {
		name: "UpdateField",
		description: "",
		kind: "alias",
		alias:
			"UpdateBooleanField | UpdateColorField | UpdateNumberField | UpdateStringField | UpdateFormattedTextField | UpdateImageField | UpdateLinkField | UpdateDateField | UpdateFileField | UpdateEnumField | UpdateCollectionReferenceField | UpdateMultiCollectionReferenceField | UpdateFieldDivider | UpdateUnsupportedField | UpdateArrayField",
		references: [
			"UpdateBooleanField",
			"UpdateColorField",
			"UpdateNumberField",
			"UpdateStringField",
			"UpdateFormattedTextField",
			"UpdateImageField",
			"UpdateLinkField",
			"UpdateDateField",
			"UpdateFileField",
			"UpdateEnumField",
			"UpdateCollectionReferenceField",
			"UpdateMultiCollectionReferenceField",
			"UpdateFieldDivider",
			"UpdateUnsupportedField",
			"UpdateArrayField",
		],
	},
	updatefieldattributes: {
		name: "UpdateFieldAttributes",
		description:
			"The type of the `attributes` parameter of `Field.setAttributes`:\n\n```ts\nconst fileFieldAttributes: UpdateFieldAttributes<FileField> = {}\nfileFieldAttributes.allowedFileTypes = []\nfileField.setAttributes(fileFieldAttributes)\n```\n\nCan also use `typeof`:\n\n```ts\nconst fileFieldAttributes: UpdateFieldAttributes<typeof fileField> = {}\n```",
		kind: "alias",
		alias:
			'Omit<Extract<UpdateField, {\n    type: T["type"];\n}>,\n"id" | "type">',
		references: ["Extract", "UpdateField"],
	},
	updatefieldbase: {
		name: "UpdateFieldBase",
		description: "",
		kind: "interface",
		references: ["WithFieldId"],
		extends: ["WithFieldId", "Partial"],
	},
	updatefielddivider: {
		name: "UpdateFieldDivider",
		description: "",
		kind: "interface",
		references: ["FieldDividerBase", "UpdateFieldBase"],
		extends: ["FieldDividerBase", "UpdateFieldBase"],
	},
	updatefilefield: {
		name: "UpdateFileField",
		description: "",
		kind: "interface",
		references: [
			"FileFieldBase",
			"UpdateFieldBase",
			"WithOptionalFieldRequired",
		],
		extends: [
			"FileFieldBase",
			"UpdateFieldBase",
			"Partial",
			"WithOptionalFieldRequired",
		],
	},
	updatefilevariable: {
		name: "UpdateFileVariable",
		description: "",
		kind: "interface",
		references: ["WithFileVariableType", "UpdateVariableBase"],
		extends: [
			"WithFileVariableType",
			"UpdateVariableBase",
			"Partial",
			"Partial",
		],
	},
	updateformattedtextfield: {
		name: "UpdateFormattedTextField",
		description: "",
		kind: "interface",
		references: [
			"FormattedTextFieldBase",
			"UpdateFieldBase",
			"WithOptionalFieldRequired",
		],
		extends: [
			"FormattedTextFieldBase",
			"UpdateFieldBase",
			"WithOptionalFieldRequired",
		],
	},
	updateformattedtextvariable: {
		name: "UpdateFormattedTextVariable",
		description: "",
		kind: "interface",
		references: ["WithFormattedTextVariableType", "UpdateVariableBase"],
		extends: ["WithFormattedTextVariableType", "UpdateVariableBase", "Partial"],
	},
	updateimagefield: {
		name: "UpdateImageField",
		description: "",
		kind: "interface",
		references: [
			"ImageFieldBase",
			"UpdateFieldBase",
			"WithOptionalFieldRequired",
		],
		extends: ["ImageFieldBase", "UpdateFieldBase", "WithOptionalFieldRequired"],
	},
	updateimagevariable: {
		name: "UpdateImageVariable",
		description: "",
		kind: "interface",
		references: ["WithImageVariableType", "UpdateVariableBase"],
		extends: ["WithImageVariableType", "UpdateVariableBase", "Partial"],
	},
	updatelinkfield: {
		name: "UpdateLinkField",
		description: "",
		kind: "interface",
		references: [
			"LinkFieldBase",
			"UpdateFieldBase",
			"WithOptionalFieldRequired",
		],
		extends: ["LinkFieldBase", "UpdateFieldBase", "WithOptionalFieldRequired"],
	},
	updatelinkvariable: {
		name: "UpdateLinkVariable",
		description: "",
		kind: "interface",
		references: ["WithLinkVariableType", "UpdateVariableBase"],
		extends: ["WithLinkVariableType", "UpdateVariableBase"],
	},
	updatemulticollectionreferencefield: {
		name: "UpdateMultiCollectionReferenceField",
		description: "",
		kind: "interface",
		references: [
			"MultiCollectionReferenceFieldBase",
			"UpdateFieldBase",
			"WithOptionalFieldRequired",
		],
		extends: [
			"MultiCollectionReferenceFieldBase",
			"UpdateFieldBase",
			"WithOptionalFieldRequired",
		],
	},
	updatenumberfield: {
		name: "UpdateNumberField",
		description: "",
		kind: "interface",
		references: ["NumberFieldBase", "UpdateFieldBase"],
		extends: ["NumberFieldBase", "UpdateFieldBase"],
	},
	updatenumbervariable: {
		name: "UpdateNumberVariable",
		description: "",
		kind: "interface",
		references: ["WithNumberVariableType", "UpdateVariableBase"],
		extends: ["WithNumberVariableType", "UpdateVariableBase", "Partial"],
	},
	updateredirect: {
		name: "UpdateRedirect",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "id",
				type: "string",
				description:
					"The id of the redirect, if provided, the redirect will be updated, otherwise a new redirect will be created",
				optional: false,
			},
		],
		extends: ["Partial", "Partial"],
	},
	updatestringfield: {
		name: "UpdateStringField",
		description: "",
		kind: "interface",
		references: [
			"StringFieldBase",
			"UpdateFieldBase",
			"WithOptionalFieldRequired",
		],
		extends: [
			"StringFieldBase",
			"UpdateFieldBase",
			"WithOptionalFieldRequired",
		],
	},
	updatestringvariable: {
		name: "UpdateStringVariable",
		description: "",
		kind: "interface",
		references: ["WithStringVariableType", "UpdateVariableBase"],
		extends: ["WithStringVariableType", "UpdateVariableBase", "Partial"],
	},
	updateunsupportedfield: {
		name: "UpdateUnsupportedField",
		description: "",
		kind: "interface",
		references: ["UnsupportedFieldBase", "UpdateFieldBase"],
		extends: ["UnsupportedFieldBase", "UpdateFieldBase"],
	},
	updateunsupportedvariable: {
		name: "UpdateUnsupportedVariable",
		description: "",
		kind: "interface",
		references: ["WithUnsupportedVariableType", "UpdateVariableBase"],
		extends: ["WithUnsupportedVariableType", "UpdateVariableBase"],
	},
	updatevariable: {
		name: "UpdateVariable",
		description: "",
		kind: "alias",
		alias:
			"UpdateBooleanVariable | UpdateNumberVariable | UpdateStringVariable | UpdateFormattedTextVariable | UpdateEnumVariable | UpdateColorVariable | UpdateImageVariable | UpdateFileVariable | UpdateLinkVariable | UpdateDateVariable | UpdateBorderVariable | UpdateUnsupportedVariable",
		references: [
			"UpdateBooleanVariable",
			"UpdateNumberVariable",
			"UpdateStringVariable",
			"UpdateFormattedTextVariable",
			"UpdateEnumVariable",
			"UpdateColorVariable",
			"UpdateImageVariable",
			"UpdateFileVariable",
			"UpdateLinkVariable",
			"UpdateDateVariable",
			"UpdateBorderVariable",
			"UpdateUnsupportedVariable",
		],
	},
	updatevariableattributes: {
		name: "UpdateVariableAttributes",
		description: "",
		kind: "alias",
		alias: 'Omit<Extract<UpdateVariable, {\n    type: T["type"];\n}>, "type">',
		references: ["Extract", "UpdateVariable"],
	},
	updatevariablebase: {
		name: "UpdateVariableBase",
		description: "",
		kind: "interface",
		references: ["NullablePartialRecord"],
		extends: ["Partial", "NullablePartialRecord"],
	},
	user: {
		name: "User",
		description: "Information about a Framer user.",
		kind: "interface",
		references: ["ApiVersion1User"],
		members: [
			{
				name: "apiVersion1Id",
				type: "string",
				description:
					"Hashed user id served by API version 1, use for migration only",
				optional: false,
			},
			{
				name: "avatarUrl",
				type: "string | undefined",
				description: "URL to the user's avatar image, if available.",
				optional: true,
			},
			{
				name: "initials",
				type: "string",
				description:
					"Initials of the user's name, for use when no avatar is available.",
				optional: false,
			},
		],
		extends: ["ApiVersion1User"],
	},
	vectorsetitemcontrol: {
		name: "VectorSetItemControl",
		description: "",
		kind: "interface",
		references: ["ControlBase", "UnsupportedVariable"],
		members: [
			{
				name: "type",
				type: '"vectorSetItem"',
				description: "",
				optional: false,
			},
			{
				name: "value",
				type: "string | UnsupportedVariable | undefined",
				description: "",
				optional: true,
			},
		],
		extends: ["ControlBase"],
	},
	vectorsetitemvariable: {
		name: "VectorSetItemVariable",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "type",
				type: '"number" | "color"',
				description: "",
				optional: false,
			},
			{
				name: "id",
				type: "string",
				description: "",
				optional: false,
			},
			{
				name: "name",
				type: "string",
				description: "",
				optional: false,
			},
		],
	},
	widthconstraint: {
		name: "WidthConstraint",
		description: "",
		kind: "alias",
		alias: "CSSDimension<CSSUnit.Pixel | CSSUnit.Percentage>",
		references: ["CSSDimension", "CSSUnit.Pixel", "CSSUnit.Percentage"],
	},
	widthlength: {
		name: "WidthLength",
		description: "",
		kind: "alias",
		alias: "Length | FitContent | FitImage",
		references: ["Length", "FitContent", "FitImage"],
	},
	withallowedfiletypes: {
		name: "WithAllowedFileTypes",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "allowedFileTypes",
				type: "string[]",
				description:
					'Supported types are:\n1. Valid media types (`"image/png"`, `"audio/*"`, `"✱/✱"`)\n2. File extensions with a leading dot (`".png"`)\n3. `"*"` (`.*` as a pseudo file extension was confirmed to allow everything in file pickers of all three major browser engines)\n4. File extensions WITHOUT a leading dot (`"png"`) – unlike in browser APIs – for backward compatibility and in case something doesn\'t parse as a media type\n@see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file#unique_file_type_specifiers',
				optional: false,
			},
		],
	},
	withaspectratiotrait: {
		name: "WithAspectRatioTrait",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "aspectRatio",
				type: "number | null",
				description:
					"Width-to-height ratio (e.g. `1.5` for 3:2).\nSetting to `null` removes the aspect ratio constraint.\nSupported by FrameNode, ComponentInstanceNode.",
				optional: false,
			},
		],
	},
	withassetname: {
		name: "WithAssetName",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "name",
				type: "string",
				description: "",
				optional: true,
			},
			{
				name: "path",
				type: "never",
				description: "",
				optional: true,
			},
		],
	},
	withassetpath: {
		name: "WithAssetPath",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "name",
				type: "never",
				description: "",
				optional: true,
			},
			{
				name: "path",
				type: "string",
				description: "",
				optional: true,
			},
		],
	},
	withbackgroundcolortrait: {
		name: "WithBackgroundColorTrait",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "backgroundColor",
				type: "(T extends TraitVariantData ? ColorStyleData : ColorStyle) | string | null",
				description:
					"Background color in RGBA format (e.g. `rgba(242, 59, 57, 1)`) or as a {@link ColorStyle} instance.\nSetting to `null` removes the background color. Supported by FrameNode.",
				optional: false,
			},
		],
	},
	withbackgroundgradienttrait: {
		name: "WithBackgroundGradientTrait",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "backgroundGradient",
				type: "(T extends TraitVariantData ? GradientData : Gradient) | null",
				description:
					"Background gradient (linear, radial, or conic). Supported by FrameNode.",
				optional: false,
			},
		],
	},
	withbackgroundimagetrait: {
		name: "WithBackgroundImageTrait",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "backgroundImage",
				type: "(T extends TraitVariantData ? ImageAssetData : ImageAsset) | null",
				description: "Background image asset. Supported by FrameNode.",
				optional: false,
			},
		],
	},
	withbooleandefaultvalue: {
		name: "WithBooleanDefaultValue",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "defaultValue",
				type: "boolean",
				description: "",
				optional: false,
			},
		],
	},
	withbooleanvariableclass: {
		name: "WithBooleanVariableClass",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "[classKey]",
				type: "typeof booleanVariableClass",
				description: "",
				optional: false,
			},
		],
	},
	withbooleanvariabletype: {
		name: "WithBooleanVariableType",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "type",
				type: "typeof booleanVariableType",
				description: "",
				optional: false,
			},
		],
	},
	withborderradiustrait: {
		name: "WithBorderRadiusTrait",
		description: "",
		kind: "interface",
		references: ["BorderRadius"],
		members: [
			{
				name: "borderRadius",
				type: "BorderRadius",
				description:
					'Border radius for rounded corners. Single value (e.g. `"10px"` or `"50%"`)\nor per-corner (e.g. `"10px 20px 30px 40px"` for top-left, top-right, bottom-right, bottom-left).\nSetting to `null` removes the border radius. Supported by FrameNode.',
				optional: false,
			},
		],
	},
	withbordertrait: {
		name: "WithBorderTrait",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "border",
				type: "(T extends TraitVariantData ? Marshaled<Border> : Border) | null",
				description:
					'Border properties including width, color, and style.\nStyles: `"solid"`, `"dashed"`, `"dotted"`, `"double"`.\nWidth can be per-side (e.g. `"1px 2px 3px 4px"`).\nSetting to `null` removes the border. Supported by FrameNode.',
				optional: false,
			},
		],
	},
	withbordervariableclass: {
		name: "WithBorderVariableClass",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "[classKey]",
				type: "typeof borderVariableClass",
				description: "",
				optional: false,
			},
		],
	},
	withbordervariabletype: {
		name: "WithBorderVariableType",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "type",
				type: "typeof borderVariableType",
				description: "",
				optional: false,
			},
		],
	},
	withcolordefaultvaluedata: {
		name: "WithColorDefaultValueData",
		description: "",
		kind: "interface",
		references: ["ColorStyleData"],
		members: [
			{
				name: "defaultValue",
				type: "string | ColorStyleData",
				description: "",
				optional: false,
			},
		],
	},
	withcolorvariableclass: {
		name: "WithColorVariableClass",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "[classKey]",
				type: "typeof colorVariableClass",
				description: "",
				optional: false,
			},
		],
	},
	withcolorvariabletype: {
		name: "WithColorVariableType",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "type",
				type: "typeof colorVariableType",
				description: "",
				optional: false,
			},
		],
	},
	withcontrolattributestrait: {
		name: "WithControlAttributesTrait",
		description: "",
		kind: "interface",
		references: ["ControlAttributes"],
		members: [
			{
				name: "controls",
				type: "ControlAttributes",
				description:
					"Property control values for code components. Supported by ComponentInstanceNode.",
				optional: false,
			},
		],
	},
	withdatevariableclass: {
		name: "WithDateVariableClass",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "[classKey]",
				type: "typeof dateVariableClass",
				description: "",
				optional: false,
			},
		],
	},
	withdatevariabletype: {
		name: "WithDateVariableType",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "type",
				type: "typeof dateVariableType",
				description: "",
				optional: false,
			},
		],
	},
	withdisplaytime: {
		name: "WithDisplayTime",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "displayTime",
				type: "boolean",
				description: "",
				optional: true,
			},
		],
	},
	withenumcaseid: {
		name: "WithEnumCaseId",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "id",
				type: "string",
				description: "",
				optional: false,
			},
		],
	},
	withenumcasenameinput: {
		name: "WithEnumCaseNameInput",
		description: "",
		kind: "interface",
		references: ["LocalizationSourceUpdate"],
		members: [
			{
				name: "name",
				type: "string",
				description: "",
				optional: false,
			},
			{
				name: "nameByLocale",
				type: "LocalizationSourceUpdate",
				description: "",
				optional: true,
			},
		],
	},
	withenumcasenameinputforupdate: {
		name: "WithEnumCaseNameInputForUpdate",
		description: "",
		kind: "interface",
		references: ["LocaleId", "LocalizedValueUpdate", "LocalizationValue"],
		members: [
			{
				name: "name",
				type: "string",
				description: "",
				optional: false,
			},
			{
				name: "nameByLocale",
				type: "Record<LocaleId, LocalizedValueUpdate | LocalizationValue>",
				description: "",
				optional: true,
			},
		],
	},
	withenumvariableclass: {
		name: "WithEnumVariableClass",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "[classKey]",
				type: "typeof enumVariableClass",
				description: "",
				optional: false,
			},
		],
	},
	withenumvariabletype: {
		name: "WithEnumVariableType",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "type",
				type: "typeof enumVariableType",
				description: "",
				optional: false,
			},
		],
	},
	withfieldbasedon: {
		name: "WithFieldBasedOn",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "basedOn",
				type: "string | null",
				description:
					"The ID of the field on which this field is based.\n\nWhen set, this field will use the referenced field's value as a fallback\nwhen no value is provided.",
				optional: false,
			},
		],
	},
	withfieldcollectionid: {
		name: "WithFieldCollectionId",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "collectionId",
				type: "string",
				description: "",
				optional: false,
			},
		],
	},
	withfieldid: {
		name: "WithFieldId",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "id",
				type: "string",
				description:
					"Required unique ID. Use a unique identifier to prevent data loss when the field is renamed.",
				optional: false,
			},
		],
	},
	withfieldname: {
		name: "WithFieldName",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "name",
				type: "string",
				description: "The name of the field as displayed in the UI.",
				optional: false,
			},
		],
	},
	withfieldrequired: {
		name: "WithFieldRequired",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "required",
				type: "boolean",
				description: "",
				optional: false,
			},
		],
	},
	withfilevariableclass: {
		name: "WithFileVariableClass",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "[classKey]",
				type: "typeof fileVariableClass",
				description: "",
				optional: false,
			},
		],
	},
	withfilevariabletype: {
		name: "WithFileVariableType",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "type",
				type: "typeof fileVariableType",
				description: "",
				optional: false,
			},
		],
	},
	withfonttrait: {
		name: "WithFontTrait",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "font",
				type: "(T extends TraitVariantData ? FontData : Font) | null",
				description: "Font selection for text. Supported by TextNode.",
				optional: false,
			},
		],
	},
	withformattedtextvariableclass: {
		name: "WithFormattedTextVariableClass",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "[classKey]",
				type: "typeof formattedTextVariableClass",
				description: "",
				optional: false,
			},
		],
	},
	withformattedtextvariabletype: {
		name: "WithFormattedTextVariableType",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "type",
				type: "typeof formattedTextVariableType",
				description: "",
				optional: false,
			},
		],
	},
	withgriditemtrait: {
		name: "WithGridItemTrait",
		description: "",
		kind: "interface",
		references: ["GridItemAlignment", "GridItemColumnSpan"],
		members: [
			{
				name: "gridItemFillCellWidth",
				type: "boolean | null",
				description:
					"Whether to fill the grid cell width. For nodes inside a grid container. Defaults to `true`. Supported by FrameNode, TextNode.",
				optional: false,
			},
			{
				name: "gridItemFillCellHeight",
				type: "boolean | null",
				description:
					"Whether to fill the grid cell height. For nodes inside a grid container. Defaults to `true`. Supported by FrameNode, TextNode.",
				optional: false,
			},
			{
				name: "gridItemHorizontalAlignment",
				type: "GridItemAlignment | null",
				description:
					'Horizontal alignment within grid cell. For nodes inside a grid container. Defaults to `"center"`. Supported by FrameNode, TextNode.',
				optional: false,
			},
			{
				name: "gridItemVerticalAlignment",
				type: "GridItemAlignment | null",
				description:
					'Vertical alignment within grid cell. For nodes inside a grid container. Defaults to `"center"`. Supported by FrameNode, TextNode.',
				optional: false,
			},
			{
				name: "gridItemColumnSpan",
				type: "GridItemColumnSpan | null",
				description:
					'Number of columns to span, or `"all"` for all columns. For nodes inside a grid container. Defaults to `1`. Supported by FrameNode, TextNode.',
				optional: false,
			},
			{
				name: "gridItemRowSpan",
				type: "number | null",
				description:
					"Number of rows to span. For nodes inside a grid container. Defaults to `1`. Supported by FrameNode, TextNode.",
				optional: false,
			},
		],
	},
	withid: {
		name: "WithId",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "id",
				type: "string",
				description: "",
				optional: false,
			},
		],
	},
	withidandoptionalusereditable: {
		name: "WithIdAndOptionalUserEditable",
		description: "",
		kind: "interface",
		references: ["WithFieldId"],
		extends: ["WithFieldId", "Partial"],
	},
	withimagerenderingtrait: {
		name: "WithImageRenderingTrait",
		description: "",
		kind: "interface",
		references: ["ImageRendering"],
		members: [
			{
				name: "imageRendering",
				type: "ImageRendering | null",
				description:
					'How images should be rendered when scaled: `"auto"` or `"pixelated"`.\nOnly applies to frames with image backgrounds.\nSetting to `null` uses default rendering. Supported by FrameNode.',
				optional: false,
			},
		],
	},
	withimagevariableclass: {
		name: "WithImageVariableClass",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "[classKey]",
				type: "typeof imageVariableClass",
				description: "",
				optional: false,
			},
		],
	},
	withimagevariabletype: {
		name: "WithImageVariableType",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "type",
				type: "typeof imageVariableType",
				description: "",
				optional: false,
			},
		],
	},
	withinlinetextstyletrait: {
		name: "WithInlineTextStyleTrait",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "inlineTextStyle",
				type: "(T extends TraitVariantData ? TextStyleData : TextStyle) | null",
				description:
					"Apply a text style preset. Setting to `null` removes the text style.\nSupported by TextNode.",
				optional: false,
			},
		],
	},
	withkey: {
		name: "WithKey",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "key",
				type: "string",
				description: "",
				optional: false,
			},
		],
	},
	withlayouttrait: {
		name: "WithLayoutTrait",
		description: "",
		kind: "interface",
		references: [
			"StackLayout",
			"GridLayout",
			"LayoutType",
			"CSSDimension",
			"CSSUnit.Pixel",
		],
		members: [
			{
				name: "layout",
				type: "LayoutType | null",
				description:
					"Enables stack or grid layout. Setting to `null` disables any applied layout.\nOperation is deferred and applied after the current update cycle. Supported by FrameNode.",
				optional: false,
			},
			{
				name: "gap",
				type: "CSSDimension<CSSUnit.Pixel> | `${CSSDimension<CSSUnit.Pixel>} ${CSSDimension<CSSUnit.Pixel>}` | null",
				description:
					'Spacing between items in a layout. Single value (e.g. `"10px"`) applies to both axes;\ntwo values (e.g. `"10px 20px"`) set horizontal and vertical separately.\nOnly works with layout enabled. Supported by FrameNode.',
				optional: false,
			},
			{
				name: "padding",
				type: "CSSDimension<CSSUnit.Pixel> | `${CSSDimension<CSSUnit.Pixel>} ${CSSDimension<CSSUnit.Pixel>} ${CSSDimension<CSSUnit.Pixel>} ${CSSDimension<CSSUnit.Pixel>}` | null",
				description:
					'Inner spacing of a container with layout. Single value (e.g. `"10px"`) applies to all sides;\nfour values (e.g. `"10px 20px 30px 40px"`) set top, right, bottom, left.\nOnly works with layout enabled. Supported by FrameNode.',
				optional: false,
			},
		],
		extends: ["StackLayout", "GridLayout"],
	},
	withlinktrait: {
		name: "WithLinkTrait",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "link",
				type: "string | null",
				description:
					'URL or internal page link. External: `"https://example.com"`, internal: `"/about"`,\nemail: `"mailto:user@example.com"`. Setting to `null` removes the link.\nSupported by FrameNode, TextNode.',
				optional: false,
			},
			{
				name: "linkOpenInNewTab",
				type: "boolean | null",
				description:
					"Whether to open the link in a new tab. Default is automatically determined based on link type.\nSupported by FrameNode, TextNode.",
				optional: false,
			},
		],
	},
	withlinkvariableclass: {
		name: "WithLinkVariableClass",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "[classKey]",
				type: "typeof linkVariableClass",
				description: "",
				optional: false,
			},
		],
	},
	withlinkvariabletype: {
		name: "WithLinkVariableType",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "type",
				type: "typeof linkVariableType",
				description: "",
				optional: false,
			},
		],
	},
	withlockedtrait: {
		name: "WithLockedTrait",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "locked",
				type: "boolean",
				description:
					"Whether the node is locked for editing. Defaults to `false`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.",
				optional: false,
			},
		],
	},
	withname: {
		name: "WithName",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "name",
				type: "string",
				description: "",
				optional: false,
			},
		],
	},
	withnamebylocale: {
		name: "WithNameByLocale",
		description: "",
		kind: "interface",
		references: ["InlineLocalizationValueByLocale"],
		members: [
			{
				name: "nameByLocale",
				type: "InlineLocalizationValueByLocale",
				description: "",
				optional: false,
			},
		],
	},
	withnametrait: {
		name: "WithNameTrait",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "name",
				type: "string | null",
				description:
					"The name of the node displayed in the layers panel.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode,\nComponentNode, VectorSetNode, VectorSetItemNode.",
				optional: false,
			},
		],
	},
	withnodeid: {
		name: "WithNodeId",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "nodeId",
				type: "string",
				description: "",
				optional: false,
			},
		],
	},
	withnodetype: {
		name: "WithNodeType",
		description: "",
		kind: "interface",
		references: ["NodeType"],
		members: [
			{
				name: "nodeType",
				type: "NodeType",
				description: "",
				optional: false,
			},
		],
	},
	withnumberdefaultvalue: {
		name: "WithNumberDefaultValue",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "defaultValue",
				type: "number",
				description: "",
				optional: false,
			},
		],
	},
	withnumbervariableclass: {
		name: "WithNumberVariableClass",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "[classKey]",
				type: "typeof numberVariableClass",
				description: "",
				optional: false,
			},
		],
	},
	withnumbervariabletype: {
		name: "WithNumberVariableType",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "type",
				type: "typeof numberVariableType",
				description: "",
				optional: false,
			},
		],
	},
	withopacitytrait: {
		name: "WithOpacityTrait",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "opacity",
				type: "number",
				description:
					"Opacity of the node, from `0` (fully transparent) to `1` (fully opaque). Defaults to `1`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode.",
				optional: false,
			},
		],
	},
	withoptionalfieldrequired: {
		name: "WithOptionalFieldRequired",
		description: "",
		kind: "alias",
		alias: "Partial<WithFieldRequired>",
		references: ["WithFieldRequired"],
	},
	withoptionalname: {
		name: "WithOptionalName",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "name",
				type: "string",
				description: "",
				optional: true,
			},
		],
	},
	withoverflowtrait: {
		name: "WithOverflowTrait",
		description: "",
		kind: "interface",
		references: ["Overflow", "AxisOverflow"],
		members: [
			{
				name: "overflow",
				type: "Overflow | null",
				description:
					"Controls how content that exceeds the element's box is handled.\nSetting to `null` removes the overflow property. Will overwrite `overflowX` or `overflowY`.\nSupported by FrameNode, TextNode.",
				optional: false,
			},
			{
				name: "overflowX",
				type: "AxisOverflow | null",
				description:
					"Controls horizontal overflow behavior.\nSetting to `null` removes the overflow X property. Supported by FrameNode, TextNode.",
				optional: false,
			},
			{
				name: "overflowY",
				type: "AxisOverflow | null",
				description:
					"Controls vertical overflow behavior.\nSetting to `null` removes the overflow Y property. Supported by FrameNode, TextNode.",
				optional: false,
			},
		],
	},
	withpinstrait: {
		name: "WithPinsTrait",
		description: "",
		kind: "interface",
		references: ["CSSDimension", "CSSUnit.Pixel", "CSSUnit.Percentage"],
		members: [
			{
				name: "top",
				type: "CSSDimension<CSSUnit.Pixel> | null",
				description:
					'Distance from top edge when using absolute/fixed positioning.\nOnly applies when position is not `"relative"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
				optional: false,
			},
			{
				name: "right",
				type: "CSSDimension<CSSUnit.Pixel> | null",
				description:
					'Distance from right edge when using absolute/fixed positioning.\nOnly applies when position is not `"relative"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
				optional: false,
			},
			{
				name: "bottom",
				type: "CSSDimension<CSSUnit.Pixel> | null",
				description:
					'Distance from bottom edge when using absolute/fixed positioning.\nOnly applies when position is not `"relative"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
				optional: false,
			},
			{
				name: "left",
				type: "CSSDimension<CSSUnit.Pixel> | null",
				description:
					'Distance from left edge when using absolute/fixed positioning.\nOnly applies when position is not `"relative"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
				optional: false,
			},
			{
				name: "centerX",
				type: "CSSDimension<CSSUnit.Percentage> | null",
				description:
					'Center anchor horizontal position as percentage (e.g. `"50%"`).\nUsed when pins are not set.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
				optional: false,
			},
			{
				name: "centerY",
				type: "CSSDimension<CSSUnit.Percentage> | null",
				description:
					'Center anchor vertical position as percentage (e.g. `"50%"`).\nUsed when pins are not set.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
				optional: false,
			},
		],
	},
	withpositiontrait: {
		name: "WithPositionTrait",
		description: "",
		kind: "interface",
		references: ["Position"],
		members: [
			{
				name: "position",
				type: "Position",
				description:
					'Positioning behavior of the node.\n- `"relative"`: Default for nodes in stack/grid layouts\n- `"absolute"`: Positioned relative to parent\n- `"fixed"`: Positioned relative to viewport\n- `"sticky"`: Sticks to viewport edges when scrolling\n\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode.',
				optional: false,
			},
		],
	},
	withrotationtrait: {
		name: "WithRotationTrait",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "rotation",
				type: "number",
				description:
					"Rotation angle in degrees. Defaults to `0`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode.",
				optional: false,
			},
		],
	},
	withsizeconstraintstrait: {
		name: "WithSizeConstraintsTrait",
		description: "",
		kind: "interface",
		references: ["WidthConstraint", "HeightConstraint"],
		members: [
			{
				name: "maxWidth",
				type: "WidthConstraint | null",
				description:
					"Maximum width constraint. Supported by FrameNode, TextNode, ComponentInstanceNode.",
				optional: false,
			},
			{
				name: "minWidth",
				type: "WidthConstraint | null",
				description:
					"Minimum width constraint. Supported by FrameNode, TextNode, ComponentInstanceNode.",
				optional: false,
			},
			{
				name: "maxHeight",
				type: "HeightConstraint | null",
				description:
					"Maximum height constraint. Supported by FrameNode, TextNode, ComponentInstanceNode.",
				optional: false,
			},
			{
				name: "minHeight",
				type: "HeightConstraint | null",
				description:
					"Minimum height constraint. Supported by FrameNode, TextNode, ComponentInstanceNode.",
				optional: false,
			},
		],
	},
	withsizetrait: {
		name: "WithSizeTrait",
		description: "",
		kind: "interface",
		references: ["WidthLength", "HeightLength"],
		members: [
			{
				name: "width",
				type: "WidthLength | null",
				description:
					'Width of the node. Accepts pixel, percentage, fraction values, or `"fit-content"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
				optional: false,
			},
			{
				name: "height",
				type: "HeightLength | null",
				description:
					'Height of the node. Accepts pixel, percentage, fraction, viewport-height values, or `"fit-content"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
				optional: false,
			},
		],
	},
	withstringdefaultvalue: {
		name: "WithStringDefaultValue",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "defaultValue",
				type: "string",
				description: "",
				optional: false,
			},
		],
	},
	withstringvariableclass: {
		name: "WithStringVariableClass",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "[classKey]",
				type: "typeof stringVariableClass",
				description: "",
				optional: false,
			},
		],
	},
	withstringvariabletype: {
		name: "WithStringVariableType",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "type",
				type: "typeof stringVariableType",
				description: "",
				optional: false,
			},
		],
	},
	withsvgtrait: {
		name: "WithSVGTrait",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "svg",
				type: "string",
				description: "SVG markup content. Supported by SVGNode.",
				optional: false,
			},
		],
	},
	withtexttruncationtrait: {
		name: "WithTextTruncationTrait",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "textTruncation",
				type: "number | null",
				description:
					"Maximum number of lines a text node can display before being truncated with an ellipsis.\nMust be used alongside `overflow`. Setting to `null` removes the text truncation property.\nSupported by TextNode.",
				optional: false,
			},
		],
	},
	withtofield: {
		name: "WithToField",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "to",
				type: "string",
				description: "The destination path to redirect to",
				optional: false,
			},
		],
	},
	withunsupportedcomputedvalueclass: {
		name: "WithUnsupportedComputedValueClass",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "[classKey]",
				type: "typeof unsupportedComputedValueClass",
				description: "",
				optional: false,
			},
		],
	},
	withunsupportedvariableclass: {
		name: "WithUnsupportedVariableClass",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "[classKey]",
				type: "typeof unsupportedVariableClass",
				description: "",
				optional: false,
			},
		],
	},
	withunsupportedvariabletype: {
		name: "WithUnsupportedVariableType",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "type",
				type: "typeof unsupportedVariableType",
				description: "",
				optional: false,
			},
		],
	},
	withusereditable: {
		name: "WithUserEditable",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "userEditable",
				type: "boolean",
				description: "Is the user able to edit the field within the UI.",
				optional: false,
			},
		],
	},
	withvisibletrait: {
		name: "WithVisibleTrait",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "visible",
				type: "boolean",
				description:
					"Whether the node is visible on the canvas. Defaults to `true`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.",
				optional: false,
			},
		],
	},
	withzindextrait: {
		name: "WithZIndexTrait",
		description: "",
		kind: "interface",
		references: [],
		members: [
			{
				name: "zIndex",
				type: "number | null",
				description:
					"Stacking order of positioned elements. Higher values appear on top of lower values.\nSetting to `null` removes the z-index property. Supported by FrameNode, TextNode.",
				optional: false,
			},
		],
	},
	zoomintoviewoptions: {
		name: "ZoomIntoViewOptions",
		description: "Options for controlling the `zoomIntoView` behavior.",
		kind: "interface",
		references: [],
		members: [
			{
				name: "maxZoom",
				type: "number",
				description:
					"Set a percentage limit for the maximum zoom level.\n\nFor example, use a value of `1.0` to ensure the zoom does not exceed 100%.",
				optional: true,
			},
			{
				name: "skipIfVisible",
				type: "boolean",
				description:
					"If the nodes are already visible, skip the zoom.\n@default false",
				optional: true,
			},
		],
	},
};

export const classes: Record<string, ClassInfo> = {
	arrayfield: {
		name: "ArrayField",
		description:
			"A CMS Collection field that stores an array of nested fields. Currently only\nsupports a single image field, which creates a Gallery in the CMS.",
	},
	booleanfield: {
		name: "BooleanField",
		description:
			"A CMS Collection field that stores a boolean (true or false) value.",
	},
	booleanvariable: {
		name: "BooleanVariable",
		description: "",
	},
	bordervariable: {
		name: "BorderVariable",
		description: "",
	},
	codefile: {
		name: "CodeFile",
		description:
			"Represents a code file in the Framer project, such as a code component\nor code override.",
	},
	codefileversion: {
		name: "CodeFileVersion",
		description: "A saved version (snapshot) of a code file.",
	},
	collection: {
		name: "Collection",
		description:
			"A CMS Collection in the project. Collections can be created by users or\nmanaged by plugins. Use `managedBy` to check the owner.\n\nAny kind of Collection can be read from. Unmanaged Collections are those\ncreated and updated by people. Use the `collection` mode to access CMS\ndata from your plugin.",
	},
	collectionitem: {
		name: "CollectionItem",
		description:
			"An item (row) in a CMS Collection. Each item contains field data keyed by\nfield ID, a unique slug, and a draft status.",
	},
	collectionreferencefield: {
		name: "CollectionReferenceField",
		description: "A field that references an item in another collection.",
	},
	colorfield: {
		name: "ColorField",
		description:
			"A CMS Collection field that stores a color value (RGBA/HSL/HEX format).",
	},
	colorstyle: {
		name: "ColorStyle",
		description:
			'A reusable color style defined in the project. Supports light and dark\ntheme variants. Color styles let you manage color appearances from one\nplace in a project. In the UI, you can find them in the Assets panel.\nPlugins can use these styles to do things like sync design systems or\ncheck accessibility.\n\nColors are stored in RGBA format, e.g. `rgba(242, 59, 57, 1)`. The\n`light` attribute is the default color used in light theme. The `dark`\nattribute is an optional color used in the dark theme.\n\nTo organize color styles into folders, use `/` as a separator in the\nname, e.g. `"My Plugin/My Cool Color"`.\n\n@example\n```ts\n// Create a new color style with light and dark variants.\nconst colorStyle = await framer.createColorStyle({\n  name: "My Cool Color",\n  light: "rgba(242, 59, 57, 1)",\n  dark: "rgba(120, 22, 11, 1)"\n})\n\n// Update an existing color style.\nawait colorStyle.setAttributes({ dark: "rgba(10, 10, 10, 0.2)" })\n\n// Remove a color style from the project.\nawait colorStyle.remove()\n\n// Store plugin data on a color style.\nawait colorStyle.setPluginData("key", "value")\n```',
	},
	colorvariable: {
		name: "ColorVariable",
		description: "",
	},
	componentinstancenode: {
		name: "ComponentInstanceNode",
		description:
			"An instance of a code or design component on the canvas. Component\ninstances are identified by their {@link ComponentInstanceNode.componentIdentifier | componentIdentifier}\nand can have their control properties updated via\n{@link NodeMethods.setAttributes | setAttributes}.\n\n@example\n```ts\nif (isCodeComponentNode(selection)) {\n  selection.setAttributes({\n    controls: { radius: 10 }\n  })\n}\n```",
	},
	componentinstanceplaceholder: {
		name: "ComponentInstancePlaceholder",
		description: "@alpha",
	},
	componentnode: {
		name: "ComponentNode",
		description:
			"A reusable design component definition. Component nodes contain\nvariants, gesture states, and variables. They can be inserted as\ninstances via their module URL.",
	},
	conicgradient: {
		name: "ConicGradient",
		description: "",
	},
	datefield: {
		name: "DateField",
		description:
			"A CMS Collection field that stores a date in UTC format. Optionally displays time.",
	},
	datevariable: {
		name: "DateVariable",
		description: "",
	},
	designpagenode: {
		name: "DesignPageNode",
		description: "A design page (non-web canvas) in the project.",
	},
	enumcase: {
		name: "EnumCase",
		description:
			"An individual case (option) within an Enum Field or Enum Variable.",
	},
	enumfield: {
		name: "EnumField",
		description:
			"A CMS Collection field with a fixed set of enum cases (options) that the user\ncan choose from. Enum cases must be defined as options before they can be\nassigned to CMS items.",
	},
	enumvariable: {
		name: "EnumVariable",
		description: "",
	},
	fieldbasewithrequired: {
		name: "FieldBaseWithRequired",
		description: "",
	},
	fielddivider: {
		name: "FieldDivider",
		description:
			"A visual divider between fields in the CMS UI. Not a data field.",
	},
	fileasset: {
		name: "FileAsset",
		description: "A file asset uploaded to the Framer project.",
	},
	filefield: {
		name: "FileField",
		description:
			"A CMS Collection field that stores a file asset (`FileAsset`).",
	},
	filevariable: {
		name: "FileVariable",
		description: "",
	},
	font: {
		name: "Font",
		description:
			"A font available in the project, including custom uploaded fonts.",
	},
	formattedtextfield: {
		name: "FormattedTextField",
		description:
			"A CMS Collection field that stores HTML-formatted text content (H1-H6, P, and other standard content elements).",
	},
	formattedtextvariable: {
		name: "FormattedTextVariable",
		description: "",
	},
	framenode: {
		name: "FrameNode",
		description:
			"A frame layer on the canvas, the most common container node. Frames\ncan contain children, have layout settings, backgrounds, borders, and\ncan serve as breakpoint or component variants.",
	},
	framer: {
		name: "framer",
		description: "",
	},
	framerapierror: {
		name: "FramerAPIError",
		description: "",
	},
	framerpluginclosederror: {
		name: "FramerPluginClosedError",
		description: "",
	},
	framerpluginerror: {
		name: "FramerPluginError",
		description: "",
	},
	imageasset: {
		name: "ImageAsset",
		description:
			"An image that has been uploaded to the Framer project. Provides methods\nto access image data, measure dimensions, and load as bitmap or HTML element.",
	},
	imagefield: {
		name: "ImageField",
		description:
			"A CMS Collection field that stores an image asset (`ImageAsset`).",
	},
	imagevariable: {
		name: "ImageVariable",
		description: "",
	},
	lineargradient: {
		name: "LinearGradient",
		description: "",
	},
	linkfield: {
		name: "LinkField",
		description: "A CMS Collection field that stores a URL in string format.",
	},
	linkvariable: {
		name: "LinkVariable",
		description: "",
	},
	managedcollection: {
		name: "ManagedCollection",
		description:
			"A CMS Collection that is fully controlled by a plugin. Managed Collections\nallow plugins to define fields and sync items programmatically. Fields and\nitems can only be added, edited, and deleted by the owning plugin, not by\nthe user (unless a field is marked `userEditable`).\n\nA Managed Collection plugin becomes available within the CMS when it supports\nboth `configureManagedCollection` and `syncManagedCollection` modes.\n\nUse `framer.getManagedCollection()` to obtain an instance when the plugin is\nlaunched in either of those modes.",
	},
	multicollectionreferencefield: {
		name: "MultiCollectionReferenceField",
		description:
			"A field that references multiple items in another collection.",
	},
	numberfield: {
		name: "NumberField",
		description: "A CMS Collection field that stores a numeric value.",
	},
	numbervariable: {
		name: "NumberVariable",
		description: "",
	},
	pluginengine: {
		name: "PluginEngine",
		description: "",
	},
	radialgradient: {
		name: "RadialGradient",
		description: "",
	},
	redirect: {
		name: "Redirect",
		description:
			"A URL redirect configured in the project. Redirects are applied when\nthe site is published.",
	},
	stringfield: {
		name: "StringField",
		description: "A CMS Collection field that stores a text string value.",
	},
	stringvariable: {
		name: "StringVariable",
		description: "",
	},
	svgnode: {
		name: "SVGNode",
		description:
			"An SVG graphic layer on the canvas. Contains the raw SVG string and\nsupports positioning, sizing, rotation, and visibility.",
	},
	textnode: {
		name: "TextNode",
		description:
			'A text layer on the canvas. Use {@link TextNode.setText | setText} and\n{@link TextNode.getText | getText} to work with plain text, or\n{@link TextNode.setHTML | setHTML} and {@link TextNode.getHTML | getHTML}\nfor rich text content.\n\n@example\n```ts\nconst selection = await framer.getSelection()\nfor (const node of selection) {\n  if (isTextNode(node)) {\n    node.setText("Hello!")\n  }\n}\n```',
	},
	textstyle: {
		name: "TextStyle",
		description:
			'A reusable text style defined in the project, including font, size,\ncolor, and responsive breakpoints. Text styles let you manage text\nappearances from one place in a project. In the UI, you can find them\nin the Assets panel.\n\nText styles support responsive breakpoints that apply different values\nat different window widths. A maximum of four breakpoints can be added.\nBreakpoints are automatically ordered from largest to smallest `minWidth`.\nEach breakpoint must have a unique `minWidth` value.\n\nBy default, text styles use a built-in font. Use\n{@link Font} to customize a text style\'s typeface. All font variants\n(bold, italic, boldItalic) must share the same font family as the base\nfont.\n\nTo organize text styles into folders, use `/` as a separator in the\nname, e.g. `"My Plugin/Heading"`.\n\n@example\n```ts\n// Create a new text style.\nconst textStyle = await framer.createTextStyle({\n  name: "Heading",\n  tag: "h1",\n  fontSize: "30px",\n  lineHeight: "1.6em",\n})\n\n// Create a text style with responsive breakpoints.\nconst textStyle = await framer.createTextStyle({\n  fontSize: "24px",\n  minWidth: 1280,\n  breakpoints: [\n    { minWidth: 1024, fontSize: "18px" },\n    { minWidth: 320, fontSize: "16px" }\n  ]\n})\n\n// Update an existing text style.\nawait textStyle.setAttributes({\n  color: "rgba(242, 59, 57, 1)"\n})\n\n// Create a text style with a custom font.\nconst font = await framer.getFont("Open Sans")\nif (font) {\n  const textStyle = await framer.createTextStyle({ font })\n}\n\n// Remove a text style from the project.\nawait textStyle.remove()\n```',
	},
	unknownnode: {
		name: "UnknownNode",
		description:
			"A node whose type is not recognized by the current plugin API version.\nUnknown nodes cannot be cloned, have their attributes set, or return\nchildren.",
	},
	unsupportedcomputedvalue: {
		name: "UnsupportedComputedValue",
		description: "",
	},
	unsupportedfield: {
		name: "UnsupportedField",
		description:
			"A field type that is not yet supported by the plugin API.\nReturned when Framer uses a field type that the plugin API does not recognize.",
	},
	unsupportedvariable: {
		name: "UnsupportedVariable",
		description: "",
	},
	vectorset: {
		name: "VectorSet",
		description: "A set of vector icons available in the project.\n\n@alpha",
	},
	vectorsetitem: {
		name: "VectorSetItem",
		description: "An individual vector icon within a VectorSet.\n\n@alpha",
	},
	vectorsetitemnode: {
		name: "VectorSetItemNode",
		description: "An individual item within a VectorSet node.",
	},
	vectorsetnode: {
		name: "VectorSetNode",
		description: "A container node for a set of vector icons.",
	},
	webpagenode: {
		name: "WebPageNode",
		description:
			"A web page in the project's site map. Web pages have a\n{@link WebPageNode.path | path} and may be associated with a CMS\ncollection when used as a detail page.",
	},
};

export const methodsByCategory: Record<string, MethodInfo[]> = {
	arrayfield: [
		{
			name: "fields",
			category: "ArrayField",
			signature: "fields: readonly [ArrayItemField]",
			description:
				"The nested fields within this array field. Currently limited to a single image field.",
			references: ["ArrayItemField"],
		},
		{
			name: "id",
			category: "ArrayField",
			signature: "id: string",
			description: "The unique identifier of the field.",
			references: [],
		},
		{
			name: "name",
			category: "ArrayField",
			signature: "name: string",
			description: "The display name of the field as shown in the UI.",
			references: [],
		},
		{
			name: "remove",
			category: "ArrayField",
			signature: "remove(): Promise<void>",
			description:
				'Remove this field.\n\nUse `"Field.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "required",
			category: "ArrayField",
			signature: "required: boolean",
			description:
				"Whether this field is required. Required fields must have a value set on every CMS item.",
			references: [],
		},
		{
			name: "setAttributes",
			category: "ArrayField",
			signature:
				"setAttributes(attributes: UpdateFieldAttributes<typeof this>): Promise<typeof this | null>",
			description:
				'Use to rename any field:\n\n```ts\nconst updatedField = await field.setAttributes({ name: "New Name" })\n```\n\nAnd to set other attributes too, but make sure to narrow based on field\'s `type` first, as to\navoid potential bugs:\n\n```ts\nif (field.type === "file") await field.setAttributes({ allowedFileTypes: ["txt", "md"] })\n```\n\nReturns the updated field on success, and `null` in the unlikely event of it being removed\nbetween getting it and calling this method.\n\n@param attributes - The attributes to update.\n\nUse `"Field.setAttributes"` to check if this method is allowed.',
			references: ["UpdateFieldAttributes"],
		},
	],
	booleanfield: [
		{
			name: "id",
			category: "BooleanField",
			signature: "id: string",
			description: "The unique identifier of the field.",
			references: [],
		},
		{
			name: "name",
			category: "BooleanField",
			signature: "name: string",
			description: "The display name of the field as shown in the UI.",
			references: [],
		},
		{
			name: "remove",
			category: "BooleanField",
			signature: "remove(): Promise<void>",
			description:
				'Remove this field.\n\nUse `"Field.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setAttributes",
			category: "BooleanField",
			signature:
				"setAttributes(attributes: UpdateFieldAttributes<typeof this>): Promise<typeof this | null>",
			description:
				'Use to rename any field:\n\n```ts\nconst updatedField = await field.setAttributes({ name: "New Name" })\n```\n\nAnd to set other attributes too, but make sure to narrow based on field\'s `type` first, as to\navoid potential bugs:\n\n```ts\nif (field.type === "file") await field.setAttributes({ allowedFileTypes: ["txt", "md"] })\n```\n\nReturns the updated field on success, and `null` in the unlikely event of it being removed\nbetween getting it and calling this method.\n\n@param attributes - The attributes to update.\n\nUse `"Field.setAttributes"` to check if this method is allowed.',
			references: ["UpdateFieldAttributes"],
		},
	],
	booleanvariable: [
		{
			name: "remove",
			category: "BooleanVariable",
			signature: "remove(): Promise<void>",
			description:
				'Remove this variable.\n\nUse `"Variable.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setAttributes",
			category: "BooleanVariable",
			signature:
				"setAttributes(attributes: UpdateVariableAttributes<typeof this>): Promise<typeof this | null>",
			description:
				'Use to rename or change the description of this variable:\n\n```ts\nconst updatedVariable = await variable.setAttributes({ name: "New Name" })\n```\n\nAnd to update other attributes too, but make sure to narrow using `instanceof` first, as to\navoid potential bugs:\n\n```ts\nif (variable instanceof FileVariable) await variable.setAttributes({ allowedFileTypes: ["txt", "md"] })\n```\n\nReturns the updated variable on success, and `null` in the unlikely event of it being removed\nbetween getting it and calling this method.\n\nUse `"Variable.setAttributes"` to check if this method is allowed.',
			references: ["UpdateVariableAttributes"],
		},
	],
	bordervariable: [
		{
			name: "remove",
			category: "BorderVariable",
			signature: "remove(): Promise<void>",
			description:
				'Remove this variable.\n\nUse `"Variable.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setAttributes",
			category: "BorderVariable",
			signature:
				"setAttributes(attributes: UpdateVariableAttributes<typeof this>): Promise<typeof this | null>",
			description:
				'Use to rename or change the description of this variable:\n\n```ts\nconst updatedVariable = await variable.setAttributes({ name: "New Name" })\n```\n\nAnd to update other attributes too, but make sure to narrow using `instanceof` first, as to\navoid potential bugs:\n\n```ts\nif (variable instanceof FileVariable) await variable.setAttributes({ allowedFileTypes: ["txt", "md"] })\n```\n\nReturns the updated variable on success, and `null` in the unlikely event of it being removed\nbetween getting it and calling this method.\n\nUse `"Variable.setAttributes"` to check if this method is allowed.',
			references: ["UpdateVariableAttributes"],
		},
	],
	codefile: [
		{
			name: "content",
			category: "CodeFile",
			signature: "content: string",
			description: "The current source code content of the file.",
			references: [],
		},
		{
			name: "exports",
			category: "CodeFile",
			signature: "exports: readonly CodeFileExport[]",
			description:
				"The array of exports available in this code file (components and overrides).",
			references: ["CodeFileExport"],
		},
		{
			name: "getVersions",
			category: "CodeFile",
			signature: "getVersions(): Promise<readonly CodeFileVersion[]>",
			description:
				"Get all versions (history) of this code file.\n\n@example\n```ts\nconst versions = await codeFile.getVersions()\nconsole.log(`File has ${versions.length} versions`)\n```\n\n@returns An array of CodeFileVersion instances.",
			references: ["CodeFileVersion"],
		},
		{
			name: "id",
			category: "CodeFile",
			signature: "id: string",
			description: "The unique identifier of the code file.",
			references: [],
		},
		{
			name: "name",
			category: "CodeFile",
			signature: "name: string",
			description: 'The name of the code file (e.g., `"MyComponent.tsx"`).',
			references: [],
		},
		{
			name: "navigateTo",
			category: "CodeFile",
			signature: "navigateTo(): Promise<void>",
			description:
				"Navigate to this code file in the Code Editor. May switch modes to\nreveal the relevant view.\n\n@example\n```ts\nawait codeFile.navigateTo()\n```",
			references: [],
		},
		{
			name: "path",
			category: "CodeFile",
			signature: "path: string",
			description: "The file system path of the code file within the project.",
			references: [],
		},
		{
			name: "remove",
			category: "CodeFile",
			signature: "remove(): Promise<void>",
			description:
				'Remove this code file from the project.\n\n@example\n```ts\nawait codeFile.remove()\n```\n\nUse `"CodeFile.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "removeProgressFromInstances",
			category: "CodeFile",
			signature: "removeProgressFromInstances(): Promise<void>",
			description: "@alpha",
			references: [],
		},
		{
			name: "rename",
			category: "CodeFile",
			signature: "rename(newName: string): Promise<CodeFile>",
			description:
				'Rename this code file.\n\n@example\n```ts\nconst renamedFile = await codeFile.rename("NewComponentName.tsx")\n```\n\nUse `"CodeFile.rename"` to check if this method is allowed.\n\n@param newName - The new name for the file.\n@returns The updated CodeFile instance.',
			references: ["CodeFile"],
		},
		{
			name: "setFileContent",
			category: "CodeFile",
			signature: "setFileContent(code: string): Promise<CodeFile>",
			description:
				'Set the content of this code file. Creates a new version.\n\n@example\n```ts\nconst updatedFile = await codeFile.setFileContent(\n\t`export default function MyComponent() {\n\t  return <div>Hello World</div>\n\t}`\n)\n```\n\nUse `"CodeFile.setFileContent"` to check if this method is allowed.\n\n@param code - The new source code content.\n@returns The updated CodeFile instance.',
			references: ["CodeFile"],
		},
		{
			name: "showProgressOnInstances",
			category: "CodeFile",
			signature:
				"showProgressOnInstances(attributes?: ShowProgressOnInstancesAttributes): Promise<void>",
			description: "@alpha",
			references: ["ShowProgressOnInstancesAttributes"],
		},
		{
			name: "typecheck",
			category: "CodeFile",
			signature:
				"typecheck(compilerOptions?: ts.server.protocol.CompilerOptions): Promise<TypecheckDiagnostic[]>",
			description:
				"Run TypeScript type checking on this code file.\n\n@example\n```ts\nconst typeErrors = await codeFile.typecheck({\n\tstrict: true\n})\n```\n\n@param compilerOptions - Optional TypeScript compiler options. See the TypeScript\nCompilerOptions reference for all available options.\n@returns An array of `TypecheckDiagnostic` results.",
			references: ["ts.server.protocol.CompilerOptions", "TypecheckDiagnostic"],
		},
	],
	codefileversion: [
		{
			name: "createdAt",
			category: "CodeFileVersion",
			signature: "createdAt: string",
			description: "The ISO 8601 timestamp of when the version was created.",
			references: [],
		},
		{
			name: "createdBy",
			category: "CodeFileVersion",
			signature: "createdBy: Readonly<User>",
			description: "The user who created this version.",
			references: ["User"],
		},
		{
			name: "getContent",
			category: "CodeFileVersion",
			signature: "getContent(): Promise<string>",
			description:
				"Retrieve the source code content of this version.\n\n@example\n```ts\nconst previousContent = await version.getContent()\n```\n\n@returns The file content as a string.",
			references: [],
		},
		{
			name: "id",
			category: "CodeFileVersion",
			signature: "id: string",
			description: "The unique identifier of the version.",
			references: [],
		},
		{
			name: "name",
			category: "CodeFileVersion",
			signature: "name: string",
			description: "The file name at this version.",
			references: [],
		},
	],
	collection: [
		{
			name: "addFields",
			category: "Collection",
			signature: "addFields(fields: CreateField[]): Promise<Field[]>",
			description:
				'Create new unmanaged Collection fields. Use `Field.setAttributes` to\nupdate existing fields.\n\nUse `"Collection.addFields"` to check if this method is allowed.\n\n@param fields - The array of fields that should be added to the collection.\n@returns The newly created Field instances.\n\n@example\n```ts\nconst createdFields = await collection.addFields([\n  { type: "string", name: "Name" },\n  { type: "enum", name: "Status", cases: [{ name: "New" }, { name: "Done" }] },\n  { type: "file", name: "Text", allowedFileTypes: ["md"] },\n  { type: "collectionReference", name: "Author", collectionId: "ASh5SZOh" },\n])\n```',
			references: ["CreateField", "Field"],
		},
		{
			name: "addItems",
			category: "Collection",
			signature: "addItems(items: CollectionItemInput[]): Promise<void>",
			description:
				'Add new items to this Collection, or update existing ones if their IDs\nmatch.\n\n- If an `id` is provided and matches an existing item, that item will be\n  updated.\n- Items without an `id` are created as new records.\n- `slug` should be unique.\n\nUse `"Collection.addItems"` to check if this method is allowed.\n\n@param items - An array of items to add or update.\n\n@example\n```ts\n// Create a new item\nawait collection.addItems([{\n  slug: "eric",\n  fieldData: {\n    [nameField.id]: { type: "string", value: "Eric" },\n    [ageField.id]: { type: "number", value: 47 },\n  },\n}])\n\n// Update an existing item\nawait collection.addItems([{ id: "aBc123", slug: "bar" }])\n```',
			references: ["CollectionItemInput"],
		},
		{
			name: "getFields",
			category: "Collection",
			signature: "getFields(): Promise<Field[]>",
			description:
				"Fetch all fields defined on this Collection, including dividers.\n\nSome fields might not be fully supported by the API; unsupported fields\nwill be returned with an `unsupported` field type.\n\n@returns An array of Field instances.\n\n@example\n```ts\nconst fields = await collection.getFields()\n```",
			references: ["Field"],
		},
		{
			name: "getItems",
			category: "Collection",
			signature: "getItems(): Promise<CollectionItem[]>",
			description:
				"Retrieve all items within this Collection, in their current order.\nItems may include drafts (unpublished items).\n\n@returns An array of CollectionItem instances.\n\n@example\n```ts\nconst items = await collection.getItems()\n```",
			references: ["CollectionItem"],
		},
		{
			name: "getPluginData",
			category: "Collection",
			signature: "getPluginData(key: string): Promise<string | null>",
			description:
				"Get plugin data by key.\n\n@param key - The plugin data key.",
			references: [],
		},
		{
			name: "getPluginDataKeys",
			category: "Collection",
			signature: "getPluginDataKeys(): Promise<string[]>",
			description: "Get all plugin data keys.",
			references: [],
		},
		{
			name: "managedBy",
			category: "Collection",
			signature: "managedBy: CollectionManagedBy",
			description:
				'Returns who manages this Collection.\n\n- `"user"` if the Collection is user-created.\n- `"thisPlugin"` if the Collection is managed by the current plugin.\n- `"anotherPlugin"` if the Collection is managed by another plugin.\n\nCollections managed by plugins are read-only. To modify them, use\n`ManagedCollection` (only possible in `configureManagedCollection` or\n`syncManagedCollection` modes).\n\nNote: the plugin still needs to check if the user has permission to edit\ncontent via `framer.isAllowedTo`.\n\n@example\n```ts\nconst collection = await framer.getActiveCollection()\n\nif (framer.mode === "collection" && collection.managedBy !== "user") {\n  framer.notify("This Collection cannot be modified.", { variant: "warning" })\n}\n```',
			references: ["CollectionManagedBy"],
		},
		{
			name: "navigateTo",
			category: "Collection",
			signature: "navigateTo(opts?: NavigableOptions): Promise<void>",
			description:
				"Navigate to this collection. May switch modes to reveal the relevant view.",
			references: ["NavigableOptions"],
		},
		{
			name: "removeFields",
			category: "Collection",
			signature: "removeFields(fieldIds: string[]): Promise<void>",
			description:
				'Remove fields from this Collection by their IDs.\n\nUse `"Collection.removeFields"` to check if this method is allowed.\n\n@param fieldIds - An array of field IDs to remove.\n\n@example\n```ts\nawait collection.removeFields([field3.id, field4.id])\n```',
			references: [],
		},
		{
			name: "removeItems",
			category: "Collection",
			signature: "removeItems(itemIds: NodeId[]): Promise<void>",
			description:
				'Remove items from this Collection by their IDs.\n\nUse `"Collection.removeItems"` to check if this method is allowed.\n\n@param itemIds - An array of item IDs to remove.\n\n@example\n```ts\nawait collection.removeItems([item3.id, item4.id])\n```',
			references: [],
		},
		{
			name: "setAsActive",
			category: "Collection",
			signature: "setAsActive(): Promise<void>",
			description:
				"Set this Collection as active, changing the selected Collection in the\nFramer UI.\n\n@example\n```ts\nawait collection.setAsActive()\n```",
			references: [],
		},
		{
			name: "setFieldOrder",
			category: "Collection",
			signature: "setFieldOrder(fieldIds: string[]): Promise<void>",
			description:
				'Reorder the fields in this Collection based on an array of field IDs.\nUnknown field IDs are ignored.\n\nUse `"Collection.setFieldOrder"` to check if this method is allowed.\n\n@param fieldIds - An array of field IDs representing the desired order.\n\n@example\n```ts\nawait collection.setFieldOrder([nameField.id, ageField.id])\n```',
			references: [],
		},
		{
			name: "setItemOrder",
			category: "Collection",
			signature: "setItemOrder(ids: NodeId[]): Promise<void>",
			description:
				'Reorder the items in this Collection based on an array of item IDs.\nUnknown item IDs are ignored.\n\nUse `"Collection.setItemOrder"` to check if this method is allowed.\n\n@param ids - An array of item IDs representing the desired order.\n\n@example\n```ts\nawait collection.setItemOrder([item3.id, item1.id, item2.id])\n```',
			references: [],
		},
		{
			name: "setPluginData",
			category: "Collection",
			signature:
				"setPluginData(key: string, value: string | null): Promise<void>",
			description:
				'Set plugin data by key.\n\nUse `"Collection.setPluginData"` to check if this method is allowed.\n\n@param key - The plugin data key.\n@param value - The value to set, or `null` to remove.',
			references: [],
		},
		{
			name: "slugFieldBasedOn",
			category: "Collection",
			signature: "slugFieldBasedOn: string | null",
			description:
				"The ID of the field the slug is based on.\n\n- Only Collections that are not managed by a Plugin will have this value set.",
			references: [],
		},
		{
			name: "slugFieldName",
			category: "Collection",
			signature: "slugFieldName: string | null",
			description:
				"The name of the field used as the slug.\n\n- Only Collections that are not managed by a Plugin will have this value set.",
			references: [],
		},
	],
	collectionitem: [
		{
			name: "draft",
			category: "CollectionItem",
			signature: "draft: boolean",
			description: "Drafts are excluded from publishing.",
			references: [],
		},
		{
			name: "fieldData",
			category: "CollectionItem",
			signature: "fieldData: Readonly<FieldData>",
			description:
				'The fields and corresponding values of this Collection item. Field data\nuses the field `id` as keys in an object.\n\n@example\n```ts\nconst titleFieldData = collectionItem.fieldData[titleField.id]\nconsole.log(titleFieldData.value) // "Getting Started"\n```',
			references: ["FieldData"],
		},
		{
			name: "getPluginData",
			category: "CollectionItem",
			signature: "getPluginData(key: string): Promise<string | null>",
			description:
				"Get plugin data by key.\n\n@param key - The plugin data key.",
			references: [],
		},
		{
			name: "getPluginDataKeys",
			category: "CollectionItem",
			signature: "getPluginDataKeys(): Promise<string[]>",
			description: "Get all plugin data keys.",
			references: [],
		},
		{
			name: "id",
			category: "CollectionItem",
			signature: "id: NodeId",
			description: "A unique identifier for this Collection item.",
			references: [],
		},
		{
			name: "navigateTo",
			category: "CollectionItem",
			signature: "navigateTo(opts?: NavigableOptions): Promise<void>",
			description:
				"Navigate the UI to this Collection item. May switch modes to reveal the\nrelevant view, such as the CMS editor.\n\n@param opts - Optional navigation options, such as scrolling to a\n  specific field.\n\n@example\n```ts\nawait collectionItem.navigateTo({\n  scrollTo: { collectionFieldId: fieldId },\n})\n```",
			references: ["NavigableOptions"],
		},
		{
			name: "nodeId",
			category: "CollectionItem",
			signature: "nodeId: NodeId",
			description:
				"External ID for managed collections, unique node ID otherwise.",
			references: [],
		},
		{
			name: "remove",
			category: "CollectionItem",
			signature: "remove(): Promise<void>",
			description:
				'Remove this item from the Collection.\n\nUse `"CollectionItem.remove"` to check if this method is allowed.\n\n@example\n```ts\nawait collectionItem.remove()\n```',
			references: [],
		},
		{
			name: "setAttributes",
			category: "CollectionItem",
			signature:
				"setAttributes(update: EditableCollectionItemAttributes): Promise<CollectionItem | null>",
			description:
				'Set the values of the fields of this CMS item. May return `null` if the\nitem was deleted before this method was called.\n\nUse `"CollectionItem.setAttributes"` to check if this method is allowed.\n\n@param update - The updated attributes for the collection item.\n@returns The updated CollectionItem, or `null` if the item no longer exists.\n\n@example\n```ts\nconst updatedItem = await collectionItem.setAttributes({\n  slug: "new-slug",\n  fieldData: {\n    [ageField.id]: { type: "number", value: 48 },\n  },\n})\n```',
			references: ["EditableCollectionItemAttributes", "CollectionItem"],
		},
		{
			name: "setPluginData",
			category: "CollectionItem",
			signature:
				"setPluginData(key: string, value: string | null): Promise<void>",
			description:
				'Set plugin data by key.\n\nUse `"CollectionItem.setPluginData"` to check if this method is allowed.\n\n@param key - The plugin data key.\n@param value - The value to set, or `null` to remove.',
			references: [],
		},
		{
			name: "slug",
			category: "CollectionItem",
			signature: "slug: string",
			description:
				"Slug value of the CMS item. Slugs should be unique within a Collection.",
			references: [],
		},
	],
	collectionreferencefield: [
		{
			name: "collectionId",
			category: "CollectionReferenceField",
			signature: "collectionId: string",
			description: "The ID of the referenced collection.",
			references: [],
		},
		{
			name: "id",
			category: "CollectionReferenceField",
			signature: "id: string",
			description: "The unique identifier of the field.",
			references: [],
		},
		{
			name: "name",
			category: "CollectionReferenceField",
			signature: "name: string",
			description: "The display name of the field as shown in the UI.",
			references: [],
		},
		{
			name: "remove",
			category: "CollectionReferenceField",
			signature: "remove(): Promise<void>",
			description:
				'Remove this field.\n\nUse `"Field.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "required",
			category: "CollectionReferenceField",
			signature: "required: boolean",
			description:
				"Whether this field is required. Required fields must have a value set on every CMS item.",
			references: [],
		},
		{
			name: "setAttributes",
			category: "CollectionReferenceField",
			signature:
				"setAttributes(attributes: UpdateFieldAttributes<typeof this>): Promise<typeof this | null>",
			description:
				'Use to rename any field:\n\n```ts\nconst updatedField = await field.setAttributes({ name: "New Name" })\n```\n\nAnd to set other attributes too, but make sure to narrow based on field\'s `type` first, as to\navoid potential bugs:\n\n```ts\nif (field.type === "file") await field.setAttributes({ allowedFileTypes: ["txt", "md"] })\n```\n\nReturns the updated field on success, and `null` in the unlikely event of it being removed\nbetween getting it and calling this method.\n\n@param attributes - The attributes to update.\n\nUse `"Field.setAttributes"` to check if this method is allowed.',
			references: ["UpdateFieldAttributes"],
		},
	],
	colorfield: [
		{
			name: "id",
			category: "ColorField",
			signature: "id: string",
			description: "The unique identifier of the field.",
			references: [],
		},
		{
			name: "name",
			category: "ColorField",
			signature: "name: string",
			description: "The display name of the field as shown in the UI.",
			references: [],
		},
		{
			name: "remove",
			category: "ColorField",
			signature: "remove(): Promise<void>",
			description:
				'Remove this field.\n\nUse `"Field.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setAttributes",
			category: "ColorField",
			signature:
				"setAttributes(attributes: UpdateFieldAttributes<typeof this>): Promise<typeof this | null>",
			description:
				'Use to rename any field:\n\n```ts\nconst updatedField = await field.setAttributes({ name: "New Name" })\n```\n\nAnd to set other attributes too, but make sure to narrow based on field\'s `type` first, as to\navoid potential bugs:\n\n```ts\nif (field.type === "file") await field.setAttributes({ allowedFileTypes: ["txt", "md"] })\n```\n\nReturns the updated field on success, and `null` in the unlikely event of it being removed\nbetween getting it and calling this method.\n\n@param attributes - The attributes to update.\n\nUse `"Field.setAttributes"` to check if this method is allowed.',
			references: ["UpdateFieldAttributes"],
		},
	],
	colorstyle: [
		{
			name: "dark",
			category: "ColorStyle",
			signature: "dark: string | null",
			description:
				"Optional color used for the dark theme in RGBA format, e.g `rgba(242, 59, 57, 1)`",
			references: [],
		},
		{
			name: "getPluginData",
			category: "ColorStyle",
			signature: "getPluginData(key: string): Promise<string | null>",
			description:
				"Get plugin data for this color style by key.\n\n@param key - The plugin data key.\n@returns The stored value, or `null` if no data exists for the key.",
			references: [],
		},
		{
			name: "getPluginDataKeys",
			category: "ColorStyle",
			signature: "getPluginDataKeys(): Promise<string[]>",
			description:
				"Get all plugin data keys for this color style.\n\n@returns An array of all plugin data keys set on this color style.",
			references: [],
		},
		{
			name: "id",
			category: "ColorStyle",
			signature: "id: NodeId",
			description: "A unique identifier for the color style.",
			references: [],
		},
		{
			name: "light",
			category: "ColorStyle",
			signature: "light: string",
			description:
				"Color used for the default or light theme in RGBA format, e.g `rgba(242, 59, 57, 1)`",
			references: [],
		},
		{
			name: "path",
			category: "ColorStyle",
			signature: "path: string",
			description:
				"Hierarchical path to the color style in the assets folder structure, e.g. `ui/modals/background`.\nUsed for organizing color styles in the UI and for programmatic access.\nSegments are separated by forward slashes.",
			references: [],
		},
		{
			name: "remove",
			category: "ColorStyle",
			signature: "remove(): Promise<void>",
			description:
				'Deletes the color style from the project. You need a reference to the\nstyle to call this method.\n\nUse `"ColorStyle.remove"` to check if this method is allowed.\n\n@example\n```ts\nawait colorStyle.remove()\n```',
			references: [],
		},
		{
			name: "setAttributes",
			category: "ColorStyle",
			signature:
				"setAttributes(update: Partial<ColorStyleAttributes>): Promise<ColorStyle | null>",
			description:
				'Set the attributes of a color style. Attributes are merged with existing\nvalues, so only the provided attributes are updated.\n\n@param update - The attributes to update.\n@returns The updated color style, or `null` if the style was not found.\n\nUse `"ColorStyle.setAttributes"` to check if this method is allowed.\n\n@example\n```ts\nawait colorStyle.setAttributes({ dark: "rgba(10, 10, 10, 0.2)" })\n```',
			references: ["ColorStyleAttributes", "ColorStyle"],
		},
		{
			name: "setPluginData",
			category: "ColorStyle",
			signature:
				"setPluginData(key: string, value: string | null): Promise<void>",
			description:
				'Set plugin data on this color style by key.\n\n@param key - The plugin data key.\n@param value - The value to set, or `null` to remove.\n\nUse `"ColorStyle.setPluginData"` to check if this method is allowed.\n\n@example\n```ts\nawait colorStyle.setPluginData("key", "value")\n```',
			references: [],
		},
	],
	colorvariable: [
		{
			name: "remove",
			category: "ColorVariable",
			signature: "remove(): Promise<void>",
			description:
				'Remove this variable.\n\nUse `"Variable.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setAttributes",
			category: "ColorVariable",
			signature:
				"setAttributes(attributes: UpdateVariableAttributes<typeof this>): Promise<typeof this | null>",
			description:
				'Use to rename or change the description of this variable:\n\n```ts\nconst updatedVariable = await variable.setAttributes({ name: "New Name" })\n```\n\nAnd to update other attributes too, but make sure to narrow using `instanceof` first, as to\navoid potential bugs:\n\n```ts\nif (variable instanceof FileVariable) await variable.setAttributes({ allowedFileTypes: ["txt", "md"] })\n```\n\nReturns the updated variable on success, and `null` in the unlikely event of it being removed\nbetween getting it and calling this method.\n\nUse `"Variable.setAttributes"` to check if this method is allowed.',
			references: ["UpdateVariableAttributes"],
		},
	],
	componentinstancenode: [
		{
			name: "aspectRatio",
			category: "ComponentInstanceNode",
			signature: "aspectRatio: number | null",
			description:
				"Width-to-height ratio (e.g. `1.5` for 3:2).\nSetting to `null` removes the aspect ratio constraint.\nSupported by FrameNode, ComponentInstanceNode.",
			references: [],
		},
		{
			name: "bottom",
			category: "ComponentInstanceNode",
			signature: "bottom: CSSDimension<CSSUnit.Pixel> | null",
			description:
				'Distance from bottom edge when using absolute/fixed positioning.\nOnly applies when position is not `"relative"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Pixel"],
		},
		{
			name: "centerX",
			category: "ComponentInstanceNode",
			signature: "centerX: CSSDimension<CSSUnit.Percentage> | null",
			description:
				'Center anchor horizontal position as percentage (e.g. `"50%"`).\nUsed when pins are not set.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Percentage"],
		},
		{
			name: "centerY",
			category: "ComponentInstanceNode",
			signature: "centerY: CSSDimension<CSSUnit.Percentage> | null",
			description:
				'Center anchor vertical position as percentage (e.g. `"50%"`).\nUsed when pins are not set.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Percentage"],
		},
		{
			name: "clone",
			category: "ComponentInstanceNode",
			signature:
				'clone(): Promise<(typeof this)[ClassKey] extends "UnknownNode" ? never : typeof this | null>',
			description:
				'Clone this node, creating a duplicate in the canvas tree.\n\n@returns The cloned node, or `null` if the clone failed.\n@throws If the node is an `UnknownNode`.\n\nUse `"Node.clone"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "componentIdentifier",
			category: "ComponentInstanceNode",
			signature: "componentIdentifier: string",
			description:
				"Identifier of the component. Supported by ComponentInstanceNode, ComponentNode.",
			references: [],
		},
		{
			name: "componentName",
			category: "ComponentInstanceNode",
			signature: "componentName: string | null",
			description:
				"Name of the component. Supported by ComponentInstanceNode, ComponentNode.",
			references: [],
		},
		{
			name: "controls",
			category: "ComponentInstanceNode",
			signature: "controls: ControlAttributes",
			description:
				"Property control values for code components. Supported by ComponentInstanceNode.",
			references: ["ControlAttributes"],
		},
		{
			name: "getChildren",
			category: "ComponentInstanceNode",
			signature: "getChildren(): Promise<CanvasNode[]>",
			description:
				"Get the children of this node in the canvas tree.\n\n@returns An array of child nodes. Returns an empty array for `UnknownNode`.",
			references: ["CanvasNode"],
		},
		{
			name: "getNodesWithAttribute",
			category: "ComponentInstanceNode",
			signature: "getNodesWithAttribute(attribute: T): Promise<Node[]>",
			description:
				'Get the descendants of this node that support `attribute`. This\nreturns nodes that have the given attribute defined in their type,\nregardless of whether it has been set.\n\n@param attribute - The attribute name to filter by.\n@returns An array of nodes that support the attribute.\n\n@example\n```ts\n// Get any kind of node that has a background color attribute.\nconst nodes = await framer.getNodesWithAttribute("backgroundColor")\n```',
			references: ["T", "Node"],
		},
		{
			name: "getNodesWithAttributeSet",
			category: "ComponentInstanceNode",
			signature: "getNodesWithAttributeSet(attribute: T): Promise<Node[]>",
			description:
				'Get the descendants of this node that have `attribute` set to a\nnon-null value.\n\n@param attribute - The attribute name to filter by.\n@returns An array of nodes that have the attribute set.\n\n@example\n```ts\n// Get all nodes with a background image set.\nconst nodes = await framer.getNodesWithAttributeSet("backgroundImage")\n```',
			references: ["T", "Node"],
		},
		{
			name: "getNodesWithType",
			category: "ComponentInstanceNode",
			signature: 'getNodesWithType(type: "FrameNode"): Promise<FrameNode[]>',
			description:
				'Get descendants of this node that match the given type. This can\nalso be used to query within a selection subtree.\n\n@param type - The node type to search for.\n@returns An array of matching descendant nodes.\n\n@example\n```ts\n// Get all frame nodes in a project.\nconst frameNodes = await framer.getNodesWithType("FrameNode")\n\n// Query within a selection subtree.\nconst selection = await framer.getSelection()\nif (selection.length === 1) {\n  const frameNodes = await selection[0].getNodesWithType("FrameNode")\n}\n```',
			references: ["FrameNode"],
		},
		{
			name: "getParent",
			category: "ComponentInstanceNode",
			signature: "getParent(): Promise<AnyNode | null>",
			description:
				"Get the parent of this node in the canvas tree.\n\n@returns The parent node, or `null` if this is a root node.",
			references: ["AnyNode"],
		},
		{
			name: "getPluginData",
			category: "ComponentInstanceNode",
			signature: "getPluginData(key: string): Promise<string | null>",
			description:
				"Get plugin data by key. Plugin data lets you store arbitrary\nstring values on individual nodes, scoped to your plugin.\n\n@param key - The plugin data key.\n@returns The stored value, or `null` if no data exists for the key.",
			references: [],
		},
		{
			name: "getPluginDataKeys",
			category: "ComponentInstanceNode",
			signature: "getPluginDataKeys(): Promise<string[]>",
			description:
				"Get all plugin data keys stored on this node.\n\n@returns An array of all plugin data keys.",
			references: [],
		},
		{
			name: "getRect",
			category: "ComponentInstanceNode",
			signature: "getRect(): Promise<Rect$1 | null>",
			description:
				"Get the bounding box of this node.\n\n@returns The bounding rectangle, or `null` if unavailable.",
			references: ["Rect$1"],
		},
		{
			name: "getRuntimeError",
			category: "ComponentInstanceNode",
			signature: "getRuntimeError(): Promise<NodeRuntimeErrorResult | null>",
			description: "Get runtime error for this node.\n\n@alpha",
			references: ["NodeRuntimeErrorResult"],
		},
		{
			name: "height",
			category: "ComponentInstanceNode",
			signature: "height: HeightLength | null",
			description:
				'Height of the node. Accepts pixel, percentage, fraction, viewport-height values, or `"fit-content"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["HeightLength"],
		},
		{
			name: "left",
			category: "ComponentInstanceNode",
			signature: "left: CSSDimension<CSSUnit.Pixel> | null",
			description:
				'Distance from left edge when using absolute/fixed positioning.\nOnly applies when position is not `"relative"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Pixel"],
		},
		{
			name: "locked",
			category: "ComponentInstanceNode",
			signature: "locked: boolean",
			description:
				"Whether the node is locked for editing. Defaults to `false`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.",
			references: [],
		},
		{
			name: "maxHeight",
			category: "ComponentInstanceNode",
			signature: "maxHeight: HeightConstraint | null",
			description:
				"Maximum height constraint. Supported by FrameNode, TextNode, ComponentInstanceNode.",
			references: ["HeightConstraint"],
		},
		{
			name: "maxWidth",
			category: "ComponentInstanceNode",
			signature: "maxWidth: WidthConstraint | null",
			description:
				"Maximum width constraint. Supported by FrameNode, TextNode, ComponentInstanceNode.",
			references: ["WidthConstraint"],
		},
		{
			name: "minHeight",
			category: "ComponentInstanceNode",
			signature: "minHeight: HeightConstraint | null",
			description:
				"Minimum height constraint. Supported by FrameNode, TextNode, ComponentInstanceNode.",
			references: ["HeightConstraint"],
		},
		{
			name: "minWidth",
			category: "ComponentInstanceNode",
			signature: "minWidth: WidthConstraint | null",
			description:
				"Minimum width constraint. Supported by FrameNode, TextNode, ComponentInstanceNode.",
			references: ["WidthConstraint"],
		},
		{
			name: "name",
			category: "ComponentInstanceNode",
			signature: "name: string | null",
			description:
				"The name of the node displayed in the layers panel.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode,\nComponentNode, VectorSetNode, VectorSetItemNode.",
			references: [],
		},
		{
			name: "navigateTo",
			category: "ComponentInstanceNode",
			signature:
				'navigateTo(opts?: Pick<NavigableOptions, "select" | "zoomIntoView">): Promise<void>',
			description:
				"Navigate to this node. May switch modes to reveal the relevant view.",
			references: ["NavigableOptions"],
		},
		{
			name: "opacity",
			category: "ComponentInstanceNode",
			signature: "opacity: number",
			description:
				"Opacity of the node, from `0` (fully transparent) to `1` (fully opaque). Defaults to `1`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode.",
			references: [],
		},
		{
			name: "position",
			category: "ComponentInstanceNode",
			signature: "position: Position",
			description:
				'Positioning behavior of the node.\n- `"relative"`: Default for nodes in stack/grid layouts\n- `"absolute"`: Positioned relative to parent\n- `"fixed"`: Positioned relative to viewport\n- `"sticky"`: Sticks to viewport edges when scrolling\n\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode.',
			references: ["Position"],
		},
		{
			name: "remove",
			category: "ComponentInstanceNode",
			signature: "remove(): Promise<void>",
			description:
				'Remove this node from the canvas tree.\n\nUse `"Node.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "right",
			category: "ComponentInstanceNode",
			signature: "right: CSSDimension<CSSUnit.Pixel> | null",
			description:
				'Distance from right edge when using absolute/fixed positioning.\nOnly applies when position is not `"relative"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Pixel"],
		},
		{
			name: "rotation",
			category: "ComponentInstanceNode",
			signature: "rotation: number",
			description:
				"Rotation angle in degrees. Defaults to `0`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode.",
			references: [],
		},
		{
			name: "select",
			category: "ComponentInstanceNode",
			signature: "select(): Promise<void>",
			description: "Select this node on the canvas.",
			references: [],
		},
		{
			name: "setAttributes",
			category: "ComponentInstanceNode",
			signature:
				'setAttributes(update: Partial<NodeClassToEditableAttributes[(typeof this)[ClassKey]]>): Promise<(typeof this)[ClassKey] extends "UnknownNode" ? never : typeof this | null>',
			description:
				'Set the attributes of this node. Attributes are merged with existing\nvalues, so only the provided attributes are updated.\n\n@param update - The attributes to update.\n@returns The updated node, or `null` if the node was not found.\n@throws If the node is an `UnknownNode`.\n\nUse `"Node.setAttributes"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setPluginData",
			category: "ComponentInstanceNode",
			signature:
				"setPluginData(key: string, value: string | null): Promise<void>",
			description:
				'Set plugin data by key. Plugin data lets you store arbitrary\nstring values on individual nodes, scoped to your plugin.\n\n@param key - The plugin data key.\n@param value - The value to set, or `null` to remove.\n\nUse `"Node.setPluginData"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "top",
			category: "ComponentInstanceNode",
			signature: "top: CSSDimension<CSSUnit.Pixel> | null",
			description:
				'Distance from top edge when using absolute/fixed positioning.\nOnly applies when position is not `"relative"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Pixel"],
		},
		{
			name: "typedControls",
			category: "ComponentInstanceNode",
			signature: "typedControls: Record<string, Control>",
			description: "@alpha",
			references: ["Control"],
		},
		{
			name: "visible",
			category: "ComponentInstanceNode",
			signature: "visible: boolean",
			description:
				"Whether the node is visible on the canvas. Defaults to `true`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.",
			references: [],
		},
		{
			name: "walk",
			category: "ComponentInstanceNode",
			signature: "walk(this: AnyNode): AsyncGenerator<AnyNode>",
			description:
				"Walk this node and its descendants recursively using an async\ngenerator. Yields nodes depth-first.",
			references: ["AnyNode"],
		},
		{
			name: "width",
			category: "ComponentInstanceNode",
			signature: "width: WidthLength | null",
			description:
				'Width of the node. Accepts pixel, percentage, fraction values, or `"fit-content"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["WidthLength"],
		},
		{
			name: "zoomIntoView",
			category: "ComponentInstanceNode",
			signature: "zoomIntoView(options?: ZoomIntoViewOptions): Promise<void>",
			description:
				"Pans and zooms the viewport to center the node.\n\n@param options - Options like `maxZoom` and `skipIfVisible`.",
			references: ["ZoomIntoViewOptions"],
		},
	],
	componentnode: [
		{
			name: "addGestureVariant",
			category: "ComponentNode",
			signature:
				'addGestureVariant(nodeId: NodeId, type: "hover" | "pressed", attributes?: Partial<EditableFrameNodeAttributes>): Promise<FrameNode & IsComponentGestureVariant>',
			description:
				'Add a state to this component.\n\n@param nodeId - The ID of the node to add the state to\n@param type - The type of state to add\n@param attributes - Optional attributes for the state\n\nUse `"ComponentNode.addGestureVariant"` to check if this method is allowed.\n\n@alpha - This method requires using FramerPluginAPIAlpha',
			references: [
				"EditableFrameNodeAttributes",
				"FrameNode",
				"IsComponentGestureVariant",
			],
		},
		{
			name: "addVariables",
			category: "ComponentNode",
			signature:
				"addVariables(variables: CreateVariable[]): Promise<ComponentVariable[]>",
			description:
				'Create new variables. Use `ComponentVariable.setAttributes` to update.\n\nUse `"ComponentNode.addVariables"` to check if this method is allowed.\n\n@alpha',
			references: ["CreateVariable", "ComponentVariable"],
		},
		{
			name: "addVariant",
			category: "ComponentNode",
			signature:
				"addVariant(basedOn: NodeId, attributes?: Partial<EditableFrameNodeAttributes>): Promise<FrameNode>",
			description:
				'Add a variant to this component.\n\n@param basedOn - The ID of the node to duplicate\n@param attributes - Optional attributes for the variant\n\nUse `"ComponentNode.addVariant"` to check if this method is allowed.\n\n@alpha - This method requires using FramerPluginAPIAlpha',
			references: ["EditableFrameNodeAttributes", "FrameNode"],
		},
		{
			name: "clone",
			category: "ComponentNode",
			signature:
				'clone(): Promise<(typeof this)[ClassKey] extends "UnknownNode" ? never : typeof this | null>',
			description:
				'Clone this node, creating a duplicate in the canvas tree.\n\n@returns The cloned node, or `null` if the clone failed.\n@throws If the node is an `UnknownNode`.\n\nUse `"Node.clone"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "componentIdentifier",
			category: "ComponentNode",
			signature: "componentIdentifier: string",
			description:
				"Identifier of the component. Supported by ComponentInstanceNode, ComponentNode.",
			references: [],
		},
		{
			name: "componentName",
			category: "ComponentNode",
			signature: "componentName: string | null",
			description:
				"Name of the component. Supported by ComponentInstanceNode, ComponentNode.",
			references: [],
		},
		{
			name: "getChildren",
			category: "ComponentNode",
			signature: "getChildren(): Promise<CanvasNode[]>",
			description:
				"Get the children of this node in the canvas tree.\n\n@returns An array of child nodes. Returns an empty array for `UnknownNode`.",
			references: ["CanvasNode"],
		},
		{
			name: "getNodesWithAttribute",
			category: "ComponentNode",
			signature: "getNodesWithAttribute(attribute: T): Promise<Node[]>",
			description:
				'Get the descendants of this node that support `attribute`. This\nreturns nodes that have the given attribute defined in their type,\nregardless of whether it has been set.\n\n@param attribute - The attribute name to filter by.\n@returns An array of nodes that support the attribute.\n\n@example\n```ts\n// Get any kind of node that has a background color attribute.\nconst nodes = await framer.getNodesWithAttribute("backgroundColor")\n```',
			references: ["T", "Node"],
		},
		{
			name: "getNodesWithAttributeSet",
			category: "ComponentNode",
			signature: "getNodesWithAttributeSet(attribute: T): Promise<Node[]>",
			description:
				'Get the descendants of this node that have `attribute` set to a\nnon-null value.\n\n@param attribute - The attribute name to filter by.\n@returns An array of nodes that have the attribute set.\n\n@example\n```ts\n// Get all nodes with a background image set.\nconst nodes = await framer.getNodesWithAttributeSet("backgroundImage")\n```',
			references: ["T", "Node"],
		},
		{
			name: "getNodesWithType",
			category: "ComponentNode",
			signature: 'getNodesWithType(type: "FrameNode"): Promise<FrameNode[]>',
			description:
				'Get descendants of this node that match the given type. This can\nalso be used to query within a selection subtree.\n\n@param type - The node type to search for.\n@returns An array of matching descendant nodes.\n\n@example\n```ts\n// Get all frame nodes in a project.\nconst frameNodes = await framer.getNodesWithType("FrameNode")\n\n// Query within a selection subtree.\nconst selection = await framer.getSelection()\nif (selection.length === 1) {\n  const frameNodes = await selection[0].getNodesWithType("FrameNode")\n}\n```',
			references: ["FrameNode"],
		},
		{
			name: "getParent",
			category: "ComponentNode",
			signature: "getParent(): Promise<AnyNode | null>",
			description:
				"Get the parent of this node in the canvas tree.\n\n@returns The parent node, or `null` if this is a root node.",
			references: ["AnyNode"],
		},
		{
			name: "getPluginData",
			category: "ComponentNode",
			signature: "getPluginData(key: string): Promise<string | null>",
			description:
				"Get plugin data by key. Plugin data lets you store arbitrary\nstring values on individual nodes, scoped to your plugin.\n\n@param key - The plugin data key.\n@returns The stored value, or `null` if no data exists for the key.",
			references: [],
		},
		{
			name: "getPluginDataKeys",
			category: "ComponentNode",
			signature: "getPluginDataKeys(): Promise<string[]>",
			description:
				"Get all plugin data keys stored on this node.\n\n@returns An array of all plugin data keys.",
			references: [],
		},
		{
			name: "getRect",
			category: "ComponentNode",
			signature: "getRect(): Promise<Rect$1 | null>",
			description:
				"Get the bounding box of this node.\n\n@returns The bounding rectangle, or `null` if unavailable.",
			references: ["Rect$1"],
		},
		{
			name: "getVariables",
			category: "ComponentNode",
			signature: "getVariables(): Promise<ComponentVariable[]>",
			description: "Get the variables that belong to this component.\n\n@alpha",
			references: ["ComponentVariable"],
		},
		{
			name: "navigateTo",
			category: "ComponentNode",
			signature:
				'navigateTo(opts?: Pick<NavigableOptions, "select" | "zoomIntoView">): Promise<void>',
			description:
				"Navigate to this node. May switch modes to reveal the relevant view.",
			references: ["NavigableOptions"],
		},
		{
			name: "remove",
			category: "ComponentNode",
			signature: "remove(): Promise<void>",
			description:
				'Remove this node from the canvas tree.\n\nUse `"Node.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "removeVariables",
			category: "ComponentNode",
			signature: "removeVariables(variableIds: string[]): Promise<void>",
			description:
				'Remove variables by their ID.\n\nUse `"ComponentNode.removeVariables"` to check if this method is allowed.\n\n@alpha',
			references: [],
		},
		{
			name: "select",
			category: "ComponentNode",
			signature: "select(): Promise<void>",
			description: "Select this node on the canvas.",
			references: [],
		},
		{
			name: "setAttributes",
			category: "ComponentNode",
			signature:
				'setAttributes(update: Partial<NodeClassToEditableAttributes[(typeof this)[ClassKey]]>): Promise<(typeof this)[ClassKey] extends "UnknownNode" ? never : typeof this | null>',
			description:
				'Set the attributes of this node. Attributes are merged with existing\nvalues, so only the provided attributes are updated.\n\n@param update - The attributes to update.\n@returns The updated node, or `null` if the node was not found.\n@throws If the node is an `UnknownNode`.\n\nUse `"Node.setAttributes"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setPluginData",
			category: "ComponentNode",
			signature:
				"setPluginData(key: string, value: string | null): Promise<void>",
			description:
				'Set plugin data by key. Plugin data lets you store arbitrary\nstring values on individual nodes, scoped to your plugin.\n\n@param key - The plugin data key.\n@param value - The value to set, or `null` to remove.\n\nUse `"Node.setPluginData"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setVariableOrder",
			category: "ComponentNode",
			signature: "setVariableOrder(variableIds: string[]): Promise<void>",
			description:
				'Arrange variables in a specific order.\n\nUse `"ComponentNode.setVariableOrder"` to check if this method is allowed.\n\n@alpha',
			references: [],
		},
		{
			name: "walk",
			category: "ComponentNode",
			signature: "walk(this: AnyNode): AsyncGenerator<AnyNode>",
			description:
				"Walk this node and its descendants recursively using an async\ngenerator. Yields nodes depth-first.",
			references: ["AnyNode"],
		},
		{
			name: "zoomIntoView",
			category: "ComponentNode",
			signature: "zoomIntoView(options?: ZoomIntoViewOptions): Promise<void>",
			description:
				"Pans and zooms the viewport to center the node.\n\n@param options - Options like `maxZoom` and `skipIfVisible`.",
			references: ["ZoomIntoViewOptions"],
		},
	],
	conicgradient: [
		{
			name: "angle",
			category: "ConicGradient",
			signature: "angle: number",
			description: "0-360",
			references: [],
		},
		{
			name: "stops",
			category: "ConicGradient",
			signature: "stops: readonly ColorStop[]",
			description: "Color stops with position",
			references: ["ColorStop"],
		},
		{
			name: "x",
			category: "ConicGradient",
			signature: "x: CSSDimension<CSSUnit.Percentage>",
			description: "Relative horizontal position",
			references: ["CSSDimension", "CSSUnit.Percentage"],
		},
		{
			name: "y",
			category: "ConicGradient",
			signature: "y: CSSDimension<CSSUnit.Percentage>",
			description: "Relative vertical position",
			references: ["CSSDimension", "CSSUnit.Percentage"],
		},
	],
	datefield: [
		{
			name: "displayTime",
			category: "DateField",
			signature: "displayTime: boolean | undefined",
			description: "Controls whether time is enabled on this date field.",
			references: [],
		},
		{
			name: "id",
			category: "DateField",
			signature: "id: string",
			description: "The unique identifier of the field.",
			references: [],
		},
		{
			name: "name",
			category: "DateField",
			signature: "name: string",
			description: "The display name of the field as shown in the UI.",
			references: [],
		},
		{
			name: "remove",
			category: "DateField",
			signature: "remove(): Promise<void>",
			description:
				'Remove this field.\n\nUse `"Field.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "required",
			category: "DateField",
			signature: "required: boolean",
			description:
				"Whether this field is required. Required fields must have a value set on every CMS item.",
			references: [],
		},
		{
			name: "setAttributes",
			category: "DateField",
			signature:
				"setAttributes(attributes: UpdateFieldAttributes<typeof this>): Promise<typeof this | null>",
			description:
				'Use to rename any field:\n\n```ts\nconst updatedField = await field.setAttributes({ name: "New Name" })\n```\n\nAnd to set other attributes too, but make sure to narrow based on field\'s `type` first, as to\navoid potential bugs:\n\n```ts\nif (field.type === "file") await field.setAttributes({ allowedFileTypes: ["txt", "md"] })\n```\n\nReturns the updated field on success, and `null` in the unlikely event of it being removed\nbetween getting it and calling this method.\n\n@param attributes - The attributes to update.\n\nUse `"Field.setAttributes"` to check if this method is allowed.',
			references: ["UpdateFieldAttributes"],
		},
	],
	datevariable: [
		{
			name: "remove",
			category: "DateVariable",
			signature: "remove(): Promise<void>",
			description:
				'Remove this variable.\n\nUse `"Variable.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setAttributes",
			category: "DateVariable",
			signature:
				"setAttributes(attributes: UpdateVariableAttributes<typeof this>): Promise<typeof this | null>",
			description:
				'Use to rename or change the description of this variable:\n\n```ts\nconst updatedVariable = await variable.setAttributes({ name: "New Name" })\n```\n\nAnd to update other attributes too, but make sure to narrow using `instanceof` first, as to\navoid potential bugs:\n\n```ts\nif (variable instanceof FileVariable) await variable.setAttributes({ allowedFileTypes: ["txt", "md"] })\n```\n\nReturns the updated variable on success, and `null` in the unlikely event of it being removed\nbetween getting it and calling this method.\n\nUse `"Variable.setAttributes"` to check if this method is allowed.',
			references: ["UpdateVariableAttributes"],
		},
	],
	designpagenode: [
		{
			name: "clone",
			category: "DesignPageNode",
			signature:
				'clone(): Promise<(typeof this)[ClassKey] extends "UnknownNode" ? never : typeof this | null>',
			description:
				'Clone this node, creating a duplicate in the canvas tree.\n\n@returns The cloned node, or `null` if the clone failed.\n@throws If the node is an `UnknownNode`.\n\nUse `"Node.clone"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "getChildren",
			category: "DesignPageNode",
			signature: "getChildren(): Promise<CanvasNode[]>",
			description:
				"Get the children of this node in the canvas tree.\n\n@returns An array of child nodes. Returns an empty array for `UnknownNode`.",
			references: ["CanvasNode"],
		},
		{
			name: "getNodesWithAttribute",
			category: "DesignPageNode",
			signature: "getNodesWithAttribute(attribute: T): Promise<Node[]>",
			description:
				'Get the descendants of this node that support `attribute`. This\nreturns nodes that have the given attribute defined in their type,\nregardless of whether it has been set.\n\n@param attribute - The attribute name to filter by.\n@returns An array of nodes that support the attribute.\n\n@example\n```ts\n// Get any kind of node that has a background color attribute.\nconst nodes = await framer.getNodesWithAttribute("backgroundColor")\n```',
			references: ["T", "Node"],
		},
		{
			name: "getNodesWithAttributeSet",
			category: "DesignPageNode",
			signature: "getNodesWithAttributeSet(attribute: T): Promise<Node[]>",
			description:
				'Get the descendants of this node that have `attribute` set to a\nnon-null value.\n\n@param attribute - The attribute name to filter by.\n@returns An array of nodes that have the attribute set.\n\n@example\n```ts\n// Get all nodes with a background image set.\nconst nodes = await framer.getNodesWithAttributeSet("backgroundImage")\n```',
			references: ["T", "Node"],
		},
		{
			name: "getNodesWithType",
			category: "DesignPageNode",
			signature: 'getNodesWithType(type: "FrameNode"): Promise<FrameNode[]>',
			description:
				'Get descendants of this node that match the given type. This can\nalso be used to query within a selection subtree.\n\n@param type - The node type to search for.\n@returns An array of matching descendant nodes.\n\n@example\n```ts\n// Get all frame nodes in a project.\nconst frameNodes = await framer.getNodesWithType("FrameNode")\n\n// Query within a selection subtree.\nconst selection = await framer.getSelection()\nif (selection.length === 1) {\n  const frameNodes = await selection[0].getNodesWithType("FrameNode")\n}\n```',
			references: ["FrameNode"],
		},
		{
			name: "getParent",
			category: "DesignPageNode",
			signature: "getParent(): Promise<AnyNode | null>",
			description:
				"Get the parent of this node in the canvas tree.\n\n@returns The parent node, or `null` if this is a root node.",
			references: ["AnyNode"],
		},
		{
			name: "getPluginData",
			category: "DesignPageNode",
			signature: "getPluginData(key: string): Promise<string | null>",
			description:
				"Get plugin data by key. Plugin data lets you store arbitrary\nstring values on individual nodes, scoped to your plugin.\n\n@param key - The plugin data key.\n@returns The stored value, or `null` if no data exists for the key.",
			references: [],
		},
		{
			name: "getPluginDataKeys",
			category: "DesignPageNode",
			signature: "getPluginDataKeys(): Promise<string[]>",
			description:
				"Get all plugin data keys stored on this node.\n\n@returns An array of all plugin data keys.",
			references: [],
		},
		{
			name: "getRect",
			category: "DesignPageNode",
			signature: "getRect(): Promise<Rect$1 | null>",
			description:
				"Get the bounding box of this node.\n\n@returns The bounding rectangle, or `null` if unavailable.",
			references: ["Rect$1"],
		},
		{
			name: "navigateTo",
			category: "DesignPageNode",
			signature:
				'navigateTo(opts?: Pick<NavigableOptions, "select" | "zoomIntoView">): Promise<void>',
			description:
				"Navigate to this node. May switch modes to reveal the relevant view.",
			references: ["NavigableOptions"],
		},
		{
			name: "remove",
			category: "DesignPageNode",
			signature: "remove(): Promise<void>",
			description:
				'Remove this node from the canvas tree.\n\nUse `"Node.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "select",
			category: "DesignPageNode",
			signature: "select(): Promise<void>",
			description: "Select this node on the canvas.",
			references: [],
		},
		{
			name: "setAttributes",
			category: "DesignPageNode",
			signature:
				'setAttributes(update: Partial<NodeClassToEditableAttributes[(typeof this)[ClassKey]]>): Promise<(typeof this)[ClassKey] extends "UnknownNode" ? never : typeof this | null>',
			description:
				'Set the attributes of this node. Attributes are merged with existing\nvalues, so only the provided attributes are updated.\n\n@param update - The attributes to update.\n@returns The updated node, or `null` if the node was not found.\n@throws If the node is an `UnknownNode`.\n\nUse `"Node.setAttributes"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setPluginData",
			category: "DesignPageNode",
			signature:
				"setPluginData(key: string, value: string | null): Promise<void>",
			description:
				'Set plugin data by key. Plugin data lets you store arbitrary\nstring values on individual nodes, scoped to your plugin.\n\n@param key - The plugin data key.\n@param value - The value to set, or `null` to remove.\n\nUse `"Node.setPluginData"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "walk",
			category: "DesignPageNode",
			signature: "walk(this: AnyNode): AsyncGenerator<AnyNode>",
			description:
				"Walk this node and its descendants recursively using an async\ngenerator. Yields nodes depth-first.",
			references: ["AnyNode"],
		},
		{
			name: "zoomIntoView",
			category: "DesignPageNode",
			signature: "zoomIntoView(options?: ZoomIntoViewOptions): Promise<void>",
			description:
				"Pans and zooms the viewport to center the node.\n\n@param options - Options like `maxZoom` and `skipIfVisible`.",
			references: ["ZoomIntoViewOptions"],
		},
	],
	enumcase: [
		{
			name: "id",
			category: "EnumCase",
			signature: "id: string",
			description: "A unique identifier for the enum case.",
			references: [],
		},
		{
			name: "name",
			category: "EnumCase",
			signature: "name: string",
			description: "The display name of the enum case.",
			references: [],
		},
		{
			name: "nameByLocale",
			category: "EnumCase",
			signature: "nameByLocale: InlineLocalizationValueByLocale",
			description:
				'Localized values for the name of this enum case.\n\n@example\n```ts\nconst dutchName = enumCase.nameByLocale[dutchLocale.id] // "Naam"\n```',
			references: ["InlineLocalizationValueByLocale"],
		},
		{
			name: "remove",
			category: "EnumCase",
			signature: "remove(): Promise<void>",
			description:
				'Remove this enum case from its parent enum field.\n\n@example\n```ts\nenumCase.remove()\n```\n\nUse `"EnumCase.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setAttributes",
			category: "EnumCase",
			signature:
				"setAttributes(attributes: UpdateEnumCase): Promise<EnumCase | null>",
			description:
				'Update the attributes of this enum case.\n\n@example\n```ts\nenumCase.setAttributes({\n\tname: "New Name",\n\tnameByLocale: {\n\t\tnl: { action: "set", value: "Nieuwe naam" }\n\t}\n})\n```\n\n@param attributes - The attributes to update: `name` and/or `nameByLocale`.\n@returns The updated `EnumCase`, or `null` if the case was removed before the update.\n\nUse `"EnumCase.setAttributes"` to check if this method is allowed.',
			references: ["UpdateEnumCase", "EnumCase"],
		},
	],
	enumfield: [
		{
			name: "addCase",
			category: "EnumField",
			signature:
				"addCase(attributes: CreateEnumCase): Promise<EnumCase | null>",
			description:
				'Add a new enum case to this field.\n\n@example\n```ts\nawait enumField.addCase({\n\tname: "Name",\n\tnameByLocale: {\n\t\tnl: { action: "set", value: "Naam" }\n\t}\n})\n```\n\n@param attributes - An object with the enum case name and optional localized names.\n@returns The newly created `EnumCase`, or `null` if the case could not be added.\n\nUse `"EnumField.addCase"` to check if this method is allowed.',
			references: ["CreateEnumCase", "EnumCase"],
		},
		{
			name: "cases",
			category: "EnumField",
			signature: "cases: readonly EnumCase[]",
			description: "The available enum cases for this field.",
			references: ["EnumCase"],
		},
		{
			name: "id",
			category: "EnumField",
			signature: "id: string",
			description: "The unique identifier of the field.",
			references: [],
		},
		{
			name: "name",
			category: "EnumField",
			signature: "name: string",
			description: "The display name of the field as shown in the UI.",
			references: [],
		},
		{
			name: "remove",
			category: "EnumField",
			signature: "remove(): Promise<void>",
			description:
				'Remove this field.\n\nUse `"Field.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setAttributes",
			category: "EnumField",
			signature:
				"setAttributes(attributes: UpdateFieldAttributes<typeof this>): Promise<typeof this | null>",
			description:
				'Use to rename any field:\n\n```ts\nconst updatedField = await field.setAttributes({ name: "New Name" })\n```\n\nAnd to set other attributes too, but make sure to narrow based on field\'s `type` first, as to\navoid potential bugs:\n\n```ts\nif (field.type === "file") await field.setAttributes({ allowedFileTypes: ["txt", "md"] })\n```\n\nReturns the updated field on success, and `null` in the unlikely event of it being removed\nbetween getting it and calling this method.\n\n@param attributes - The attributes to update.\n\nUse `"Field.setAttributes"` to check if this method is allowed.',
			references: ["UpdateFieldAttributes"],
		},
		{
			name: "setCaseOrder",
			category: "EnumField",
			signature: "setCaseOrder(caseIds: string[]): Promise<void>",
			description:
				'Set the order of the enum field\'s cases.\n\n@example\n```ts\nconst alphabeticalCaseOrder = enumField.cases\n\t.toSorted((a, b) => a.name.localeCompare(b.name))\n\t.map(({ id }) => id)\nawait enumField.setCaseOrder(alphabeticalCaseOrder)\n```\n\n@param caseIds - An array of the IDs of all enum cases, in the desired new order.\n\nUse `"EnumField.setCaseOrder"` to check if this method is allowed.',
			references: [],
		},
	],
	enumvariable: [
		{
			name: "addCase",
			category: "EnumVariable",
			signature:
				"addCase(attributes: CreateEnumCase): Promise<EnumCase | null>",
			description:
				'Add a new enum case.\n\nUse `"EnumVariable.addCase"` to check if this method is allowed.',
			references: ["CreateEnumCase", "EnumCase"],
		},
		{
			name: "remove",
			category: "EnumVariable",
			signature: "remove(): Promise<void>",
			description:
				'Remove this variable.\n\nUse `"Variable.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setAttributes",
			category: "EnumVariable",
			signature:
				"setAttributes(attributes: UpdateVariableAttributes<typeof this>): Promise<typeof this | null>",
			description:
				'Use to rename or change the description of this variable:\n\n```ts\nconst updatedVariable = await variable.setAttributes({ name: "New Name" })\n```\n\nAnd to update other attributes too, but make sure to narrow using `instanceof` first, as to\navoid potential bugs:\n\n```ts\nif (variable instanceof FileVariable) await variable.setAttributes({ allowedFileTypes: ["txt", "md"] })\n```\n\nReturns the updated variable on success, and `null` in the unlikely event of it being removed\nbetween getting it and calling this method.\n\nUse `"Variable.setAttributes"` to check if this method is allowed.',
			references: ["UpdateVariableAttributes"],
		},
		{
			name: "setCaseOrder",
			category: "EnumVariable",
			signature: "setCaseOrder(caseIds: string[]): Promise<void>",
			description:
				'Arrange enum cases in a specific order.\n\nUse `"EnumVariable.setCaseOrder"` to check if this method is allowed.',
			references: [],
		},
	],
	fieldbasewithrequired: [
		{
			name: "id",
			category: "FieldBaseWithRequired",
			signature: "id: string",
			description: "The unique identifier of the field.",
			references: [],
		},
		{
			name: "name",
			category: "FieldBaseWithRequired",
			signature: "name: string",
			description: "The display name of the field as shown in the UI.",
			references: [],
		},
		{
			name: "remove",
			category: "FieldBaseWithRequired",
			signature: "remove(): Promise<void>",
			description:
				'Remove this field.\n\nUse `"Field.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "required",
			category: "FieldBaseWithRequired",
			signature: "required: boolean",
			description:
				"Whether this field is required. Required fields must have a value set on every CMS item.",
			references: [],
		},
		{
			name: "setAttributes",
			category: "FieldBaseWithRequired",
			signature:
				"setAttributes(attributes: UpdateFieldAttributes<typeof this>): Promise<typeof this | null>",
			description:
				'Use to rename any field:\n\n```ts\nconst updatedField = await field.setAttributes({ name: "New Name" })\n```\n\nAnd to set other attributes too, but make sure to narrow based on field\'s `type` first, as to\navoid potential bugs:\n\n```ts\nif (field.type === "file") await field.setAttributes({ allowedFileTypes: ["txt", "md"] })\n```\n\nReturns the updated field on success, and `null` in the unlikely event of it being removed\nbetween getting it and calling this method.\n\n@param attributes - The attributes to update.\n\nUse `"Field.setAttributes"` to check if this method is allowed.',
			references: ["UpdateFieldAttributes"],
		},
	],
	fielddivider: [
		{
			name: "id",
			category: "FieldDivider",
			signature: "id: string",
			description: "The unique identifier of the field.",
			references: [],
		},
		{
			name: "name",
			category: "FieldDivider",
			signature: "name: string",
			description: "The display name of the field as shown in the UI.",
			references: [],
		},
		{
			name: "remove",
			category: "FieldDivider",
			signature: "remove(): Promise<void>",
			description:
				'Remove this field.\n\nUse `"Field.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setAttributes",
			category: "FieldDivider",
			signature:
				"setAttributes(attributes: UpdateFieldAttributes<typeof this>): Promise<typeof this | null>",
			description:
				'Use to rename any field:\n\n```ts\nconst updatedField = await field.setAttributes({ name: "New Name" })\n```\n\nAnd to set other attributes too, but make sure to narrow based on field\'s `type` first, as to\navoid potential bugs:\n\n```ts\nif (field.type === "file") await field.setAttributes({ allowedFileTypes: ["txt", "md"] })\n```\n\nReturns the updated field on success, and `null` in the unlikely event of it being removed\nbetween getting it and calling this method.\n\n@param attributes - The attributes to update.\n\nUse `"Field.setAttributes"` to check if this method is allowed.',
			references: ["UpdateFieldAttributes"],
		},
	],
	fileasset: [
		{
			name: "url",
			category: "FileAsset",
			signature: "url: string",
			description:
				"Something that can be rendered within the iFrame. Always the original size of the image",
			references: [],
		},
	],
	filefield: [
		{
			name: "allowedFileTypes",
			category: "FileField",
			signature: "allowedFileTypes: string[]",
			description:
				'The file extensions that are allowed for uploads to this field, e.g. `["pdf", "txt"]`.',
			references: [],
		},
		{
			name: "id",
			category: "FileField",
			signature: "id: string",
			description: "The unique identifier of the field.",
			references: [],
		},
		{
			name: "name",
			category: "FileField",
			signature: "name: string",
			description: "The display name of the field as shown in the UI.",
			references: [],
		},
		{
			name: "remove",
			category: "FileField",
			signature: "remove(): Promise<void>",
			description:
				'Remove this field.\n\nUse `"Field.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "required",
			category: "FileField",
			signature: "required: boolean",
			description:
				"Whether this field is required. Required fields must have a value set on every CMS item.",
			references: [],
		},
		{
			name: "setAttributes",
			category: "FileField",
			signature:
				"setAttributes(attributes: UpdateFieldAttributes<typeof this>): Promise<typeof this | null>",
			description:
				'Use to rename any field:\n\n```ts\nconst updatedField = await field.setAttributes({ name: "New Name" })\n```\n\nAnd to set other attributes too, but make sure to narrow based on field\'s `type` first, as to\navoid potential bugs:\n\n```ts\nif (field.type === "file") await field.setAttributes({ allowedFileTypes: ["txt", "md"] })\n```\n\nReturns the updated field on success, and `null` in the unlikely event of it being removed\nbetween getting it and calling this method.\n\n@param attributes - The attributes to update.\n\nUse `"Field.setAttributes"` to check if this method is allowed.',
			references: ["UpdateFieldAttributes"],
		},
	],
	filevariable: [
		{
			name: "remove",
			category: "FileVariable",
			signature: "remove(): Promise<void>",
			description:
				'Remove this variable.\n\nUse `"Variable.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setAttributes",
			category: "FileVariable",
			signature:
				"setAttributes(attributes: UpdateVariableAttributes<typeof this>): Promise<typeof this | null>",
			description:
				'Use to rename or change the description of this variable:\n\n```ts\nconst updatedVariable = await variable.setAttributes({ name: "New Name" })\n```\n\nAnd to update other attributes too, but make sure to narrow using `instanceof` first, as to\navoid potential bugs:\n\n```ts\nif (variable instanceof FileVariable) await variable.setAttributes({ allowedFileTypes: ["txt", "md"] })\n```\n\nReturns the updated variable on success, and `null` in the unlikely event of it being removed\nbetween getting it and calling this method.\n\nUse `"Variable.setAttributes"` to check if this method is allowed.',
			references: ["UpdateVariableAttributes"],
		},
	],
	font: [
		{
			name: "family",
			category: "Font",
			signature: "family: string",
			description: "Name of the family the font belongs to.",
			references: [],
		},
		{
			name: "selector",
			category: "Font",
			signature: "selector: string",
			description: "An identifier used internally for differentiating fonts.",
			references: [],
		},
		{
			name: "style",
			category: "Font",
			signature: "style: FontStyle$1 | null",
			description:
				"Specifies if the font is normal or _italic_.\n\nNote: This will be `null` for custom fonts since their weight isn't\ncalculated.",
			references: ["FontStyle$1"],
		},
		{
			name: "weight",
			category: "Font",
			signature: "weight: FontWeight | null",
			description:
				"Specifies how thin or bold the font appears.\n\nNote: This will be `null` for custom fonts since their weight isn't\ncalculated.",
			references: ["FontWeight"],
		},
	],
	formattedtextfield: [
		{
			name: "id",
			category: "FormattedTextField",
			signature: "id: string",
			description: "The unique identifier of the field.",
			references: [],
		},
		{
			name: "name",
			category: "FormattedTextField",
			signature: "name: string",
			description: "The display name of the field as shown in the UI.",
			references: [],
		},
		{
			name: "remove",
			category: "FormattedTextField",
			signature: "remove(): Promise<void>",
			description:
				'Remove this field.\n\nUse `"Field.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "required",
			category: "FormattedTextField",
			signature: "required: boolean",
			description:
				"Whether this field is required. Required fields must have a value set on every CMS item.",
			references: [],
		},
		{
			name: "setAttributes",
			category: "FormattedTextField",
			signature:
				"setAttributes(attributes: UpdateFieldAttributes<typeof this>): Promise<typeof this | null>",
			description:
				'Use to rename any field:\n\n```ts\nconst updatedField = await field.setAttributes({ name: "New Name" })\n```\n\nAnd to set other attributes too, but make sure to narrow based on field\'s `type` first, as to\navoid potential bugs:\n\n```ts\nif (field.type === "file") await field.setAttributes({ allowedFileTypes: ["txt", "md"] })\n```\n\nReturns the updated field on success, and `null` in the unlikely event of it being removed\nbetween getting it and calling this method.\n\n@param attributes - The attributes to update.\n\nUse `"Field.setAttributes"` to check if this method is allowed.',
			references: ["UpdateFieldAttributes"],
		},
	],
	formattedtextvariable: [
		{
			name: "remove",
			category: "FormattedTextVariable",
			signature: "remove(): Promise<void>",
			description:
				'Remove this variable.\n\nUse `"Variable.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setAttributes",
			category: "FormattedTextVariable",
			signature:
				"setAttributes(attributes: UpdateVariableAttributes<typeof this>): Promise<typeof this | null>",
			description:
				'Use to rename or change the description of this variable:\n\n```ts\nconst updatedVariable = await variable.setAttributes({ name: "New Name" })\n```\n\nAnd to update other attributes too, but make sure to narrow using `instanceof` first, as to\navoid potential bugs:\n\n```ts\nif (variable instanceof FileVariable) await variable.setAttributes({ allowedFileTypes: ["txt", "md"] })\n```\n\nReturns the updated variable on success, and `null` in the unlikely event of it being removed\nbetween getting it and calling this method.\n\nUse `"Variable.setAttributes"` to check if this method is allowed.',
			references: ["UpdateVariableAttributes"],
		},
	],
	framenode: [
		{
			name: "aspectRatio",
			category: "FrameNode",
			signature: "aspectRatio: number | null",
			description:
				"Width-to-height ratio (e.g. `1.5` for 3:2).\nSetting to `null` removes the aspect ratio constraint.\nSupported by FrameNode, ComponentInstanceNode.",
			references: [],
		},
		{
			name: "backgroundColor",
			category: "FrameNode",
			signature: "backgroundColor: ColorStyle | string | null",
			description:
				"Background color in RGBA format (e.g. `rgba(242, 59, 57, 1)`) or as a {@link ColorStyle} instance.\nSetting to `null` removes the background color. Supported by FrameNode.",
			references: ["ColorStyle"],
		},
		{
			name: "backgroundGradient",
			category: "FrameNode",
			signature:
				"backgroundGradient: LinearGradient | RadialGradient | ConicGradient | null",
			description:
				"Background gradient (linear, radial, or conic). Supported by FrameNode.",
			references: ["LinearGradient", "RadialGradient", "ConicGradient"],
		},
		{
			name: "backgroundImage",
			category: "FrameNode",
			signature: "backgroundImage: ImageAsset | null",
			description: "Background image asset. Supported by FrameNode.",
			references: ["ImageAsset"],
		},
		{
			name: "border",
			category: "FrameNode",
			signature: "border: Border | null",
			description:
				'Border properties including width, color, and style.\nStyles: `"solid"`, `"dashed"`, `"dotted"`, `"double"`.\nWidth can be per-side (e.g. `"1px 2px 3px 4px"`).\nSetting to `null` removes the border. Supported by FrameNode.',
			references: ["Border"],
		},
		{
			name: "borderRadius",
			category: "FrameNode",
			signature: "borderRadius: BorderRadius",
			description:
				'Border radius for rounded corners. Single value (e.g. `"10px"` or `"50%"`)\nor per-corner (e.g. `"10px 20px 30px 40px"` for top-left, top-right, bottom-right, bottom-left).\nSetting to `null` removes the border radius. Supported by FrameNode.',
			references: ["BorderRadius"],
		},
		{
			name: "bottom",
			category: "FrameNode",
			signature: "bottom: CSSDimension<CSSUnit.Pixel> | null",
			description:
				'Distance from bottom edge when using absolute/fixed positioning.\nOnly applies when position is not `"relative"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Pixel"],
		},
		{
			name: "centerX",
			category: "FrameNode",
			signature: "centerX: CSSDimension<CSSUnit.Percentage> | null",
			description:
				'Center anchor horizontal position as percentage (e.g. `"50%"`).\nUsed when pins are not set.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Percentage"],
		},
		{
			name: "centerY",
			category: "FrameNode",
			signature: "centerY: CSSDimension<CSSUnit.Percentage> | null",
			description:
				'Center anchor vertical position as percentage (e.g. `"50%"`).\nUsed when pins are not set.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Percentage"],
		},
		{
			name: "clone",
			category: "FrameNode",
			signature:
				'clone(): Promise<(typeof this)[ClassKey] extends "UnknownNode" ? never : typeof this | null>',
			description:
				'Clone this node, creating a duplicate in the canvas tree.\n\n@returns The cloned node, or `null` if the clone failed.\n@throws If the node is an `UnknownNode`.\n\nUse `"Node.clone"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "gap",
			category: "FrameNode",
			signature: 'gap: WithLayoutTrait["gap"]',
			description:
				'Spacing between items in a layout. Single value (e.g. `"10px"`) applies to both axes;\ntwo values (e.g. `"10px 20px"`) set horizontal and vertical separately.\nOnly works with layout enabled. Supported by FrameNode.',
			references: [],
		},
		{
			name: "getChildren",
			category: "FrameNode",
			signature: "getChildren(): Promise<CanvasNode[]>",
			description:
				"Get the children of this node in the canvas tree.\n\n@returns An array of child nodes. Returns an empty array for `UnknownNode`.",
			references: ["CanvasNode"],
		},
		{
			name: "getNodesWithAttribute",
			category: "FrameNode",
			signature: "getNodesWithAttribute(attribute: T): Promise<Node[]>",
			description:
				'Get the descendants of this node that support `attribute`. This\nreturns nodes that have the given attribute defined in their type,\nregardless of whether it has been set.\n\n@param attribute - The attribute name to filter by.\n@returns An array of nodes that support the attribute.\n\n@example\n```ts\n// Get any kind of node that has a background color attribute.\nconst nodes = await framer.getNodesWithAttribute("backgroundColor")\n```',
			references: ["T", "Node"],
		},
		{
			name: "getNodesWithAttributeSet",
			category: "FrameNode",
			signature: "getNodesWithAttributeSet(attribute: T): Promise<Node[]>",
			description:
				'Get the descendants of this node that have `attribute` set to a\nnon-null value.\n\n@param attribute - The attribute name to filter by.\n@returns An array of nodes that have the attribute set.\n\n@example\n```ts\n// Get all nodes with a background image set.\nconst nodes = await framer.getNodesWithAttributeSet("backgroundImage")\n```',
			references: ["T", "Node"],
		},
		{
			name: "getNodesWithType",
			category: "FrameNode",
			signature: 'getNodesWithType(type: "FrameNode"): Promise<FrameNode[]>',
			description:
				'Get descendants of this node that match the given type. This can\nalso be used to query within a selection subtree.\n\n@param type - The node type to search for.\n@returns An array of matching descendant nodes.\n\n@example\n```ts\n// Get all frame nodes in a project.\nconst frameNodes = await framer.getNodesWithType("FrameNode")\n\n// Query within a selection subtree.\nconst selection = await framer.getSelection()\nif (selection.length === 1) {\n  const frameNodes = await selection[0].getNodesWithType("FrameNode")\n}\n```',
			references: ["FrameNode"],
		},
		{
			name: "getParent",
			category: "FrameNode",
			signature: "getParent(): Promise<AnyNode | null>",
			description:
				"Get the parent of this node in the canvas tree.\n\n@returns The parent node, or `null` if this is a root node.",
			references: ["AnyNode"],
		},
		{
			name: "getPluginData",
			category: "FrameNode",
			signature: "getPluginData(key: string): Promise<string | null>",
			description:
				"Get plugin data by key. Plugin data lets you store arbitrary\nstring values on individual nodes, scoped to your plugin.\n\n@param key - The plugin data key.\n@returns The stored value, or `null` if no data exists for the key.",
			references: [],
		},
		{
			name: "getPluginDataKeys",
			category: "FrameNode",
			signature: "getPluginDataKeys(): Promise<string[]>",
			description:
				"Get all plugin data keys stored on this node.\n\n@returns An array of all plugin data keys.",
			references: [],
		},
		{
			name: "getRect",
			category: "FrameNode",
			signature: "getRect(): Promise<Rect$1 | null>",
			description:
				"Get the bounding box of this node.\n\n@returns The bounding rectangle, or `null` if unavailable.",
			references: ["Rect$1"],
		},
		{
			name: "gridAlignment",
			category: "FrameNode",
			signature: 'gridAlignment: WithLayoutTrait["gridAlignment"]',
			description:
				'How items are aligned within the grid. Requires `layout: "grid"`. Supported by FrameNode.',
			references: [],
		},
		{
			name: "gridColumnCount",
			category: "FrameNode",
			signature: 'gridColumnCount: WithLayoutTrait["gridColumnCount"]',
			description:
				'Number of columns in the grid. Requires `layout: "grid"`. Supported by FrameNode.',
			references: [],
		},
		{
			name: "gridColumnMinWidth",
			category: "FrameNode",
			signature: 'gridColumnMinWidth: WithLayoutTrait["gridColumnMinWidth"]',
			description:
				'Minimum width of grid columns in pixels. Requires `layout: "grid"`. Supported by FrameNode.',
			references: [],
		},
		{
			name: "gridColumnWidth",
			category: "FrameNode",
			signature: 'gridColumnWidth: WithLayoutTrait["gridColumnWidth"]',
			description:
				'Width of grid columns in pixels. Requires `layout: "grid"`. Supported by FrameNode.',
			references: [],
		},
		{
			name: "gridColumnWidthType",
			category: "FrameNode",
			signature: 'gridColumnWidthType: WithLayoutTrait["gridColumnWidthType"]',
			description:
				'Type of column width sizing: `"fixed"` or `"minmax"`. Requires `layout: "grid"`. Supported by FrameNode.',
			references: [],
		},
		{
			name: "gridItemColumnSpan",
			category: "FrameNode",
			signature: 'gridItemColumnSpan: WithGridItemTrait["gridItemColumnSpan"]',
			description:
				'Number of columns to span, or `"all"` for all columns. For nodes inside a grid container. Defaults to `1`. Supported by FrameNode, TextNode.',
			references: [],
		},
		{
			name: "gridItemFillCellHeight",
			category: "FrameNode",
			signature:
				'gridItemFillCellHeight: WithGridItemTrait["gridItemFillCellHeight"]',
			description:
				"Whether to fill the grid cell height. For nodes inside a grid container. Defaults to `true`. Supported by FrameNode, TextNode.",
			references: [],
		},
		{
			name: "gridItemFillCellWidth",
			category: "FrameNode",
			signature:
				'gridItemFillCellWidth: WithGridItemTrait["gridItemFillCellWidth"]',
			description:
				"Whether to fill the grid cell width. For nodes inside a grid container. Defaults to `true`. Supported by FrameNode, TextNode.",
			references: [],
		},
		{
			name: "gridItemHorizontalAlignment",
			category: "FrameNode",
			signature:
				'gridItemHorizontalAlignment: WithGridItemTrait["gridItemHorizontalAlignment"]',
			description:
				'Horizontal alignment within grid cell. For nodes inside a grid container. Defaults to `"center"`. Supported by FrameNode, TextNode.',
			references: [],
		},
		{
			name: "gridItemRowSpan",
			category: "FrameNode",
			signature: 'gridItemRowSpan: WithGridItemTrait["gridItemRowSpan"]',
			description:
				"Number of rows to span. For nodes inside a grid container. Defaults to `1`. Supported by FrameNode, TextNode.",
			references: [],
		},
		{
			name: "gridItemVerticalAlignment",
			category: "FrameNode",
			signature:
				'gridItemVerticalAlignment: WithGridItemTrait["gridItemVerticalAlignment"]',
			description:
				'Vertical alignment within grid cell. For nodes inside a grid container. Defaults to `"center"`. Supported by FrameNode, TextNode.',
			references: [],
		},
		{
			name: "gridRowCount",
			category: "FrameNode",
			signature: 'gridRowCount: WithLayoutTrait["gridRowCount"]',
			description:
				'Number of rows in the grid. Requires `layout: "grid"`. Supported by FrameNode.',
			references: [],
		},
		{
			name: "gridRowHeight",
			category: "FrameNode",
			signature: 'gridRowHeight: WithLayoutTrait["gridRowHeight"]',
			description:
				'Height of grid rows in pixels. Requires `layout: "grid"`. Supported by FrameNode.',
			references: [],
		},
		{
			name: "gridRowHeightType",
			category: "FrameNode",
			signature: 'gridRowHeightType: WithLayoutTrait["gridRowHeightType"]',
			description:
				'Type of row height sizing: `"fixed"`, `"auto"`, or `"fit"`. Requires `layout: "grid"`. Supported by FrameNode.',
			references: [],
		},
		{
			name: "height",
			category: "FrameNode",
			signature: "height: HeightLength | null",
			description:
				'Height of the node. Accepts pixel, percentage, fraction, viewport-height values, or `"fit-content"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["HeightLength"],
		},
		{
			name: "imageRendering",
			category: "FrameNode",
			signature: "imageRendering: ImageRendering | null",
			description:
				'How images should be rendered when scaled: `"auto"` or `"pixelated"`.\nOnly applies to frames with image backgrounds.\nSetting to `null` uses default rendering. Supported by FrameNode.',
			references: ["ImageRendering"],
		},
		{
			name: "isBreakpoint",
			category: "FrameNode",
			signature: "isBreakpoint: boolean",
			description: "Whether this is a breakpoint. Supported by FrameNode.",
			references: [],
		},
		{
			name: "isPrimaryBreakpoint",
			category: "FrameNode",
			signature: "isPrimaryBreakpoint: boolean",
			description:
				"Whether this is the primary breakpoint. Supported by FrameNode.",
			references: [],
		},
		{
			name: "layout",
			category: "FrameNode",
			signature: 'layout: WithLayoutTrait["layout"]',
			description:
				"Enables stack or grid layout. Setting to `null` disables any applied layout.\nOperation is deferred and applied after the current update cycle. Supported by FrameNode.",
			references: [],
		},
		{
			name: "left",
			category: "FrameNode",
			signature: "left: CSSDimension<CSSUnit.Pixel> | null",
			description:
				'Distance from left edge when using absolute/fixed positioning.\nOnly applies when position is not `"relative"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Pixel"],
		},
		{
			name: "link",
			category: "FrameNode",
			signature: "link: string | null",
			description:
				'URL or internal page link. External: `"https://example.com"`, internal: `"/about"`,\nemail: `"mailto:user@example.com"`. Setting to `null` removes the link.\nSupported by FrameNode, TextNode.',
			references: [],
		},
		{
			name: "linkOpenInNewTab",
			category: "FrameNode",
			signature: "linkOpenInNewTab: boolean | null",
			description:
				"Whether to open the link in a new tab. Default is automatically determined based on link type.\nSupported by FrameNode, TextNode.",
			references: [],
		},
		{
			name: "locked",
			category: "FrameNode",
			signature: "locked: boolean",
			description:
				"Whether the node is locked for editing. Defaults to `false`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.",
			references: [],
		},
		{
			name: "maxHeight",
			category: "FrameNode",
			signature: "maxHeight: HeightConstraint | null",
			description:
				"Maximum height constraint. Supported by FrameNode, TextNode, ComponentInstanceNode.",
			references: ["HeightConstraint"],
		},
		{
			name: "maxWidth",
			category: "FrameNode",
			signature: "maxWidth: WidthConstraint | null",
			description:
				"Maximum width constraint. Supported by FrameNode, TextNode, ComponentInstanceNode.",
			references: ["WidthConstraint"],
		},
		{
			name: "minHeight",
			category: "FrameNode",
			signature: "minHeight: HeightConstraint | null",
			description:
				"Minimum height constraint. Supported by FrameNode, TextNode, ComponentInstanceNode.",
			references: ["HeightConstraint"],
		},
		{
			name: "minWidth",
			category: "FrameNode",
			signature: "minWidth: WidthConstraint | null",
			description:
				"Minimum width constraint. Supported by FrameNode, TextNode, ComponentInstanceNode.",
			references: ["WidthConstraint"],
		},
		{
			name: "name",
			category: "FrameNode",
			signature: "name: string | null",
			description:
				"The name of the node displayed in the layers panel.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode,\nComponentNode, VectorSetNode, VectorSetItemNode.",
			references: [],
		},
		{
			name: "navigateTo",
			category: "FrameNode",
			signature:
				'navigateTo(opts?: Pick<NavigableOptions, "select" | "zoomIntoView">): Promise<void>',
			description:
				"Navigate to this node. May switch modes to reveal the relevant view.",
			references: ["NavigableOptions"],
		},
		{
			name: "opacity",
			category: "FrameNode",
			signature: "opacity: number",
			description:
				"Opacity of the node, from `0` (fully transparent) to `1` (fully opaque). Defaults to `1`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode.",
			references: [],
		},
		{
			name: "overflow",
			category: "FrameNode",
			signature: 'overflow: WithOverflowTrait["overflow"]',
			description:
				"Controls how content that exceeds the element's box is handled.\nSetting to `null` removes the overflow property. Will overwrite `overflowX` or `overflowY`.\nSupported by FrameNode, TextNode.",
			references: [],
		},
		{
			name: "overflowX",
			category: "FrameNode",
			signature: 'overflowX: WithOverflowTrait["overflowX"]',
			description:
				"Controls horizontal overflow behavior.\nSetting to `null` removes the overflow X property. Supported by FrameNode, TextNode.",
			references: [],
		},
		{
			name: "overflowY",
			category: "FrameNode",
			signature: 'overflowY: WithOverflowTrait["overflowY"]',
			description:
				"Controls vertical overflow behavior.\nSetting to `null` removes the overflow Y property. Supported by FrameNode, TextNode.",
			references: [],
		},
		{
			name: "padding",
			category: "FrameNode",
			signature: 'padding: WithLayoutTrait["padding"]',
			description:
				'Inner spacing of a container with layout. Single value (e.g. `"10px"`) applies to all sides;\nfour values (e.g. `"10px 20px 30px 40px"`) set top, right, bottom, left.\nOnly works with layout enabled. Supported by FrameNode.',
			references: [],
		},
		{
			name: "position",
			category: "FrameNode",
			signature: "position: Position",
			description:
				'Positioning behavior of the node.\n- `"relative"`: Default for nodes in stack/grid layouts\n- `"absolute"`: Positioned relative to parent\n- `"fixed"`: Positioned relative to viewport\n- `"sticky"`: Sticks to viewport edges when scrolling\n\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode.',
			references: ["Position"],
		},
		{
			name: "remove",
			category: "FrameNode",
			signature: "remove(): Promise<void>",
			description:
				'Remove this node from the canvas tree.\n\nUse `"Node.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "right",
			category: "FrameNode",
			signature: "right: CSSDimension<CSSUnit.Pixel> | null",
			description:
				'Distance from right edge when using absolute/fixed positioning.\nOnly applies when position is not `"relative"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Pixel"],
		},
		{
			name: "rotation",
			category: "FrameNode",
			signature: "rotation: number",
			description:
				"Rotation angle in degrees. Defaults to `0`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode.",
			references: [],
		},
		{
			name: "select",
			category: "FrameNode",
			signature: "select(): Promise<void>",
			description: "Select this node on the canvas.",
			references: [],
		},
		{
			name: "setAttributes",
			category: "FrameNode",
			signature:
				'setAttributes(update: Partial<NodeClassToEditableAttributes[(typeof this)[ClassKey]]>): Promise<(typeof this)[ClassKey] extends "UnknownNode" ? never : typeof this | null>',
			description:
				'Set the attributes of this node. Attributes are merged with existing\nvalues, so only the provided attributes are updated.\n\n@param update - The attributes to update.\n@returns The updated node, or `null` if the node was not found.\n@throws If the node is an `UnknownNode`.\n\nUse `"Node.setAttributes"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setPluginData",
			category: "FrameNode",
			signature:
				"setPluginData(key: string, value: string | null): Promise<void>",
			description:
				'Set plugin data by key. Plugin data lets you store arbitrary\nstring values on individual nodes, scoped to your plugin.\n\n@param key - The plugin data key.\n@param value - The value to set, or `null` to remove.\n\nUse `"Node.setPluginData"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "stackAlignment",
			category: "FrameNode",
			signature: 'stackAlignment: WithLayoutTrait["stackAlignment"]',
			description:
				'How items are aligned perpendicular to the stack direction. Requires `layout: "stack"`. Supported by FrameNode.',
			references: [],
		},
		{
			name: "stackDirection",
			category: "FrameNode",
			signature: 'stackDirection: WithLayoutTrait["stackDirection"]',
			description:
				'Direction of items in a stack layout. Requires `layout: "stack"`. Supported by FrameNode.',
			references: [],
		},
		{
			name: "stackDistribution",
			category: "FrameNode",
			signature: 'stackDistribution: WithLayoutTrait["stackDistribution"]',
			description:
				'How items are distributed in a stack layout. Requires `layout: "stack"`. Supported by FrameNode.',
			references: [],
		},
		{
			name: "stackWrapEnabled",
			category: "FrameNode",
			signature: 'stackWrapEnabled: WithLayoutTrait["stackWrapEnabled"]',
			description:
				'Whether items should wrap to the next line. Requires `layout: "stack"`. Supported by FrameNode.',
			references: [],
		},
		{
			name: "top",
			category: "FrameNode",
			signature: "top: CSSDimension<CSSUnit.Pixel> | null",
			description:
				'Distance from top edge when using absolute/fixed positioning.\nOnly applies when position is not `"relative"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Pixel"],
		},
		{
			name: "visible",
			category: "FrameNode",
			signature: "visible: boolean",
			description:
				"Whether the node is visible on the canvas. Defaults to `true`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.",
			references: [],
		},
		{
			name: "walk",
			category: "FrameNode",
			signature: "walk(this: AnyNode): AsyncGenerator<AnyNode>",
			description:
				"Walk this node and its descendants recursively using an async\ngenerator. Yields nodes depth-first.",
			references: ["AnyNode"],
		},
		{
			name: "width",
			category: "FrameNode",
			signature: "width: WidthLength | null",
			description:
				'Width of the node. Accepts pixel, percentage, fraction values, or `"fit-content"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["WidthLength"],
		},
		{
			name: "zIndex",
			category: "FrameNode",
			signature: 'zIndex: WithZIndexTrait["zIndex"]',
			description:
				"Stacking order of positioned elements. Higher values appear on top of lower values.\nSetting to `null` removes the z-index property. Supported by FrameNode, TextNode.",
			references: [],
		},
		{
			name: "zoomIntoView",
			category: "FrameNode",
			signature: "zoomIntoView(options?: ZoomIntoViewOptions): Promise<void>",
			description:
				"Pans and zooms the viewport to center the node.\n\n@param options - Options like `maxZoom` and `skipIfVisible`.",
			references: ["ZoomIntoViewOptions"],
		},
	],
	framer: [
		{
			name: "[$framerApiOnly.applyAgentChanges]",
			category: "framer",
			signature:
				"[$framerApiOnly.applyAgentChanges](dsl: string, options?: { pagePath?: string; }): Promise<void>",
			description:
				'Applies commands to the canvas to create, update, remove, move, or duplicate nodes.\n\nThe command syntax is documented in the string returned by {@link getAgentSystemPrompt}.\nEach call is scoped to a single page.\n\n@param dsl - A string of commands separated by `;`. See {@link getAgentSystemPrompt} for syntax.\n@param options.pagePath - Target page path (e.g. `"/about"`). Defaults to the active page.',
			references: [],
		},
		{
			name: "[$framerApiOnly.getAgentContext]",
			category: "framer",
			signature:
				"[$framerApiOnly.getAgentContext](options?: { pagePath?: string; }): Promise<string>",
			description:
				'Returns the dynamic project context as a string.\n\nThe context includes project-specific data:\n- **Available fonts** — font families loaded in the project.\n- **Components** — component names and their controls.\n- **Design tokens** — color tokens defined in the project.\n- **Style presets** — text style presets defined in the project.\n- **Icon sets** — available icon sets and their definitions.\n\nThis data changes per project and page. Pair with the static prompt\nfrom {@link getAgentSystemPrompt} for complete agent context.\n\n@param options.pagePath - Target page path (e.g. `"/about"`). Defaults to the active page.\n@returns A string containing the project context.',
			references: [],
		},
		{
			name: "[$framerApiOnly.getAgentSystemPrompt]",
			category: "framer",
			signature: "[$framerApiOnly.getAgentSystemPrompt](): Promise<string>",
			description:
				"Returns the static agent system prompt as a string.\n\nThe prompt includes:\n- **Command reference** — syntax for adding, updating, removing, moving, and duplicating nodes.\n- **Design rules** — spacing, layout, typography, and responsive design guidance.\n- **Examples** — common UI patterns expressed as commands.\n- **`readProjectForAgent` query reference** — available query types and their parameters.\n\nThis is the sole documentation for the command syntax used by {@link applyAgentChanges}\nand the query types used by {@link readProjectForAgent}.\n\nThe prompt is static and does not depend on any specific project.\nCall {@link getAgentContext} to get the project-specific context.\n\n@returns A string containing the agent system prompt.",
			references: [],
		},
		{
			name: "[$framerApiOnly.readProjectForAgent]",
			category: "framer",
			signature:
				"[$framerApiOnly.readProjectForAgent](queries: Record<string, unknown>[], options?: { pagePath?: string; }): Promise<{ results: unknown[]; }>",
			description:
				'Reads project state by executing an array of queries against the project.\n\nReturns one result per query. Available query types and their parameters\nare documented in the string returned by {@link getAgentSystemPrompt}.\n\n@param queries - Array of query objects. See {@link getAgentSystemPrompt} for available types.\n@param options.pagePath - Target page path (e.g. `"/about"`). Defaults to the active page.\n@returns An object with a `results` array, one entry per query.',
			references: [],
		},
		{
			name: "[$framerInternal.initialState]",
			category: "framer",
			signature: "[$framerInternal.initialState]: InitialState",
			description: "Initial state data passed from Vekter during handshake.",
			references: ["InitialState"],
		},
		{
			name: "[Symbol.asyncDispose]",
			category: "framer",
			signature: "[Symbol.asyncDispose](): Promise<void>",
			description: "",
			references: [],
		},
		{
			name: "[Symbol.dispose]",
			category: "framer",
			signature: "[Symbol.dispose](): void",
			description: "",
			references: [],
		},
		{
			name: "addComponentInstance",
			category: "framer",
			signature:
				"addComponentInstance({ url, attributes, parentId, }: AddComponentInstanceOptions): Promise<ComponentInstanceNode>",
			description:
				"Add a component instance by module URL.\n\n@param url - The component module URL. Can be copied from the components panel.\n@param attributes - Optional component attributes.\n\n@returns The newly created component instance node.",
			references: ["AddComponentInstanceOptions", "ComponentInstanceNode"],
		},
		{
			name: "addComponentInstancePlaceholder",
			category: "framer",
			signature:
				"addComponentInstancePlaceholder(attributes?: ComponentInstancePlaceholderAttributes): Promise<ComponentInstancePlaceholder>",
			description:
				"Adds a new component instance placeholder.\n\n@param attributes - The attributes of the component instance placeholder.\n@returns The component instance placeholder.",
			references: [
				"ComponentInstancePlaceholderAttributes",
				"ComponentInstancePlaceholder",
			],
		},
		{
			name: "addDetachedComponentLayers",
			category: "framer",
			signature:
				"addDetachedComponentLayers({ url, layout, attributes }: AddDetachedComponentLayersOptions): Promise<FrameNode>",
			description: "Adds the layers of a component by module URL.",
			references: ["AddDetachedComponentLayersOptions", "FrameNode"],
		},
		{
			name: "addImage",
			category: "framer",
			signature: "addImage(image: NamedImageAssetInput | File): Promise<void>",
			description: "Upload an image, and insert on the canvas.",
			references: ["NamedImageAssetInput", "File"],
		},
		{
			name: "addImages",
			category: "framer",
			signature:
				"addImages(images: readonly NamedImageAssetInput[]): Promise<void>",
			description:
				"Add multiple images, replacing the selected images, or insert on the canvas.",
			references: ["NamedImageAssetInput"],
		},
		{
			name: "addRedirects",
			category: "framer",
			signature:
				"addRedirects(redirects: RedirectInput[]): Promise<Redirect[]>",
			description:
				'Add new redirects or update existing ones if their IDs match\n\n`from` paths can contain wildcards (`*`) which match any string, and\ncaptured groups can be referenced in the `to` path using `:1`, `:2`,\netc.\n\nThrows a `FramerPluginError` when the user lacks Site Settings permissions,\nwhen the project plan does not include Redirects, or when the maximum\nredirect count (2500) is reached.\n\n@param redirects - An array of redirect objects to add.\n@returns The added Redirects.\n\n@example\n```ts\nawait framer.addRedirects([\n  { from: "/business", to: "/enterprise", expandToAllLocales: true },\n  { from: "/posts/*", to: "/blog/:1", expandToAllLocales: false },\n])\n```',
			references: ["RedirectInput", "Redirect"],
		},
		{
			name: "addSVG",
			category: "framer",
			signature: "addSVG(svg: SVGData): Promise<void>",
			description:
				"Add an SVG, replacing the selected SVG, or insert on the canvas.",
			references: ["SVGData"],
		},
		{
			name: "addText",
			category: "framer",
			signature:
				"addText(text: string, options?: AddTextOptions): Promise<void>",
			description: "Add a new text node to the canvas.",
			references: ["AddTextOptions"],
		},
		{
			name: "applyAgentChanges",
			category: "framer",
			signature:
				"applyAgentChanges(dsl: string, options?: { pagePath?: string; }): Promise<void>",
			description:
				'Applies commands to the canvas to create, update, remove, move, or duplicate nodes.\n\nThe command syntax is documented in the string returned by {@link getAgentSystemPrompt}.\nEach call is scoped to a single page.\n\n@param dsl - A string of commands separated by `;`. See {@link getAgentSystemPrompt} for syntax.\n@param options.pagePath - Target page path (e.g. `"/about"`). Defaults to the active page.',
			references: [],
		},
		{
			name: "cloneNode",
			category: "framer",
			signature: "cloneNode(nodeId: NodeId): Promise<AnyNode | null>",
			description: "Clone a node.",
			references: ["AnyNode"],
		},
		{
			name: "createCodeFile",
			category: "framer",
			signature:
				"createCodeFile(name: string, code: string, options?: { editViaPlugin?: boolean; }): Promise<CodeFile>",
			description:
				'Create a new code file in the project.\n\n@param name - The name of the code file (including extension).\n@param code - The initial content of the code file.\n@param options - Optional settings. `editViaPlugin`: when `true`, the "Edit Code" UI action will open the plugin which created the code file.\n@returns The newly created code file instance.\n\n@example\n```ts\nconst newFile = await framer.createCodeFile(\n  "MyComponent",\n  `export default function MyComponent() {\n    return <div>Hello World</div>\n  }`\n)\n```',
			references: ["CodeFile"],
		},
		{
			name: "createCollection",
			category: "framer",
			signature: "createCollection(name: string): Promise<Collection>",
			description:
				"Create a new collection.\n\n@param name - The name to give the new collection.",
			references: ["Collection"],
		},
		{
			name: "createColorStyle",
			category: "framer",
			signature:
				"createColorStyle(attributes: ColorStyleAttributes): Promise<ColorStyle>",
			description: "Add a new color style to the project.",
			references: ["ColorStyleAttributes", "ColorStyle"],
		},
		{
			name: "createComponentNode",
			category: "framer",
			signature:
				"createComponentNode(name: string): Promise<ComponentNode | null>",
			description:
				"Create a new smart component node.\n\n@alpha\n@param name - The name of the node.\n@param attributes - The attributes of the node.\n@returns The created node.",
			references: ["ComponentNode"],
		},
		{
			name: "createDesignPage",
			category: "framer",
			signature: "createDesignPage(pageName: string): Promise<DesignPageNode>",
			description:
				'Create a new design page.\n\nIf you want to open the newly created design page, you can `.navigateTo()` the page after creation.\n\n@param pageName - The name for the new design page.\n\n@example\n```ts\nconst designPage = await framer.createDesignPage("About")\nawait designPage.navigateTo()\n```',
			references: ["DesignPageNode"],
		},
		{
			name: "createFrameNode",
			category: "framer",
			signature:
				"createFrameNode(attributes: Partial<EditableFrameNodeAttributes>, parentId?: string): Promise<FrameNode | null>",
			description: "Create a new node on the canvas.",
			references: ["EditableFrameNodeAttributes", "FrameNode"],
		},
		{
			name: "createLocale",
			category: "framer",
			signature: "createLocale(input: CreateLocaleInput): Promise<Locale>",
			description:
				"Create a new locale in the project.\n\n@alpha\n@param input - The locale configuration, use `getLocaleLanguages` and `getLocaleRegions` to get valid language and region codes.\n@returns The created locale.",
			references: ["CreateLocaleInput", "Locale"],
		},
		{
			name: "createManagedCollection",
			category: "framer",
			signature:
				"createManagedCollection(name: string): Promise<ManagedCollection>",
			description:
				"Add a new plugin-managed CMS Collection.\n\nIf a name is provided which matches an existing Collection, the promise will reject.\n\n@param name - The name to give the new collection.\n\n@example\n```ts\nconst newCollection = await framer.createManagedCollection(name)\n```",
			references: ["ManagedCollection"],
		},
		{
			name: "createTextNode",
			category: "framer",
			signature:
				"createTextNode(attributes: Partial<EditableTextNodeAttributes>, parentId?: string): Promise<TextNode | null>",
			description:
				"Create a new text node on the canvas.\n\n@alpha\n@param attributes - The attributes of the node.\n@param parentId - The id of the parent node.\n@returns The created node.",
			references: ["EditableTextNodeAttributes", "TextNode"],
		},
		{
			name: "createTextStyle",
			category: "framer",
			signature:
				"createTextStyle(attributes: TextStyleAttributes): Promise<TextStyle>",
			description: "Add a new text style to the project.",
			references: ["TextStyleAttributes", "TextStyle"],
		},
		{
			name: "createWebPage",
			category: "framer",
			signature: "createWebPage(pagePath: string): Promise<WebPageNode>",
			description:
				'Create a new web page.\n\nIf you want to open the newly created web page, you can `.navigateTo()` the page after creation.\n\n@param pagePath - The path for the new web page (e.g., "/about").\n\n@example\n```ts\nconst webPage = await framer.createWebPage("/about")\nawait webPage.navigateTo()\n```',
			references: ["WebPageNode"],
		},
		{
			name: "deploy",
			category: "framer",
			signature:
				"deploy(deploymentId: string, domains?: string[]): Promise<Hostname[]>",
			description: "",
			references: ["Hostname"],
		},
		{
			name: "disconnect",
			category: "framer",
			signature: "disconnect(): Promise<void>",
			description: "",
			references: [],
		},
		{
			name: "exportSVG",
			category: "framer",
			signature: "exportSVG(nodeId: string): Promise<string>",
			description: "",
			references: [],
		},
		{
			name: "getAgentContext",
			category: "framer",
			signature:
				"getAgentContext(options?: { pagePath?: string; }): Promise<string>",
			description:
				'Returns the dynamic project context as a string.\n\nThe context includes project-specific data:\n- **Available fonts** — font families loaded in the project.\n- **Components** — component names and their controls.\n- **Design tokens** — color tokens defined in the project.\n- **Style presets** — text style presets defined in the project.\n- **Icon sets** — available icon sets and their definitions.\n\nThis data changes per project and page. Pair with the static prompt\nfrom {@link getAgentSystemPrompt} for complete agent context.\n\n@param options.pagePath - Target page path (e.g. `"/about"`). Defaults to the active page.\n@returns A string containing the project context.',
			references: [],
		},
		{
			name: "getAgentSystemPrompt",
			category: "framer",
			signature: "getAgentSystemPrompt(): Promise<string>",
			description:
				"Returns the static agent system prompt as a string.\n\nThe prompt includes:\n- **Command reference** — syntax for adding, updating, removing, moving, and duplicating nodes.\n- **Design rules** — spacing, layout, typography, and responsive design guidance.\n- **Examples** — common UI patterns expressed as commands.\n- **`readProjectForAgent` query reference** — available query types and their parameters.\n\nThis is the sole documentation for the command syntax used by {@link applyAgentChanges}\nand the query types used by {@link readProjectForAgent}.\n\nThe prompt is static and does not depend on any specific project.\nCall {@link getAgentContext} to get the project-specific context.\n\n@returns A string containing the agent system prompt.",
			references: [],
		},
		{
			name: "getCanvasRoot",
			category: "framer",
			signature: "getCanvasRoot(): Promise<CanvasRootNode>",
			description: "Get the root of the current canvas.",
			references: ["CanvasRootNode"],
		},
		{
			name: "getChangeContributors",
			category: "framer",
			signature:
				"getChangeContributors(fromVersion?: number, toVersion?: number): Promise<string[]>",
			description: "",
			references: [],
		},
		{
			name: "getChangedPaths",
			category: "framer",
			signature:
				"getChangedPaths(): Promise<{ added: string[]; removed: string[]; modified: string[]; }>",
			description: "",
			references: [],
		},
		{
			name: "getChildren",
			category: "framer",
			signature: "getChildren(nodeId: NodeId): Promise<CanvasNode[]>",
			description: "Get the children of a node.",
			references: ["CanvasNode"],
		},
		{
			name: "getCodeFile",
			category: "framer",
			signature: "getCodeFile(id: string): Promise<CodeFile | null>",
			description:
				'Get a specific code file by its ID.\n\n@param id - The unique identifier of the code file.\n@returns The CodeFile instance or `null` if not found.\n\n@example\n```ts\nconst codeFile = await framer.getCodeFile("code-file-id")\n```',
			references: ["CodeFile"],
		},
		{
			name: "getCodeFiles",
			category: "framer",
			signature: "getCodeFiles(): Promise<readonly CodeFile[]>",
			description:
				"Get all code files in the project.\n\n@returns An array of all CodeFile instances.\n\n@example\n```ts\nconst allFiles = await framer.getCodeFiles()\nconsole.log(`Project has ${allFiles.length} code files`)\n```",
			references: ["CodeFile"],
		},
		{
			name: "getCollection",
			category: "framer",
			signature: "getCollection(id: NodeId): Promise<Collection | null>",
			description: "Get a collection by its id.",
			references: ["Collection"],
		},
		{
			name: "getCollections",
			category: "framer",
			signature: "getCollections(): Promise<Collection[]>",
			description:
				"Get all Collections in the project, both managed and unmanaged.\n\n@example\n```ts\nconst collections = await framer.getCollections()\n```",
			references: ["Collection"],
		},
		{
			name: "getColorStyle",
			category: "framer",
			signature: "getColorStyle(id: NodeId): Promise<ColorStyle | null>",
			description: "Get a specific color style.",
			references: ["ColorStyle"],
		},
		{
			name: "getColorStyles",
			category: "framer",
			signature: "getColorStyles(): Promise<ColorStyle[]>",
			description: "Get all color styles in the project.",
			references: ["ColorStyle"],
		},
		{
			name: "getCurrentUser",
			category: "framer",
			signature: "getCurrentUser(): Promise<User>",
			description:
				"Get information about the user that's interacting with the plugin.\n\n@example\n```ts\nconst user = await framer.getCurrentUser();\n```",
			references: ["User"],
		},
		{
			name: "getCustomCode",
			category: "framer",
			signature: "getCustomCode(): Promise<CustomCode>",
			description:
				"Get custom code settings set by the plugin. Your plugin can detect if\ncustom code was set and whether the user has disabled it.\n\n@example\n```ts\nconst customCode = await framer.getCustomCode()\nif (customCode.bodyStart.disabled) {\n  // Custom code was disabled by the user in settings\n}\n```",
			references: ["CustomCode"],
		},
		{
			name: "getDefaultLocale",
			category: "framer",
			signature: "getDefaultLocale(): Promise<Locale>",
			description:
				"Get the default locale of the project.\n\n@example\n```ts\nconst defaultLocale = await framer.getDefaultLocale()\n```",
			references: ["Locale"],
		},
		{
			name: "getDeployments",
			category: "framer",
			signature: "getDeployments(): Promise<Deployment[]>",
			description: "",
			references: ["Deployment"],
		},
		{
			name: "getFont",
			category: "framer",
			signature:
				"getFont(family: string, attributes?: FontAttributes): Promise<Font | null>",
			description:
				'Get a specific font from a family by name. This is not case sensitive.\nBy default, returns a font with normal weight and style. Returns `null`\nif the font does not exist or lacks the requested weight/style combination.\n\nNote: Custom fonts are not available to plugins.\n\n@param family - The font family name (e.g., `"Noto Sans"`).\n@param attributes - Optional weight and style attributes.\n@returns The matched font or `null` if not found.\n\n@example\n```ts\n// Get Noto Sans with default weight (400) and normal style\nconst font = await framer.getFont("Noto Sans")\n\n// Get Noto Sans with a specific weight and style\nconst font = await framer.getFont("Noto Sans", {\n  weight: 800,\n  style: "italic"\n})\n```',
			references: ["FontAttributes", "Font"],
		},
		{
			name: "getFonts",
			category: "framer",
			signature: "getFonts(): Promise<Font[]>",
			description:
				"Get all available fonts. Unlike the Font Picker which groups fonts by\ntypeface, this lists individual fonts for each weight and style (each\nrepresenting a separate font file).\n\nNote: Custom fonts are not available to plugins.\n\n@returns An array of all available fonts.\n\n@example\n```ts\nconst fonts = await framer.getFonts()\n```",
			references: ["Font"],
		},
		{
			name: "getImage",
			category: "framer",
			signature: "getImage(): Promise<ImageAsset | null>",
			description:
				"Get the image of the current selection or `null` if there is no image.\n\nIn `editImage` mode, this returns the image the user already has set,\nwhich your plugin can then modify.",
			references: ["ImageAsset"],
		},
		{
			name: "getLocaleLanguages",
			category: "framer",
			signature:
				"getLocaleLanguages(): Promise<{ code: string; name: string; }[]>",
			description:
				"Get all available locale languages.\n\n@alpha\n@returns A list of language codes and their display names, sorted by name.",
			references: [],
		},
		{
			name: "getLocaleRegions",
			category: "framer",
			signature:
				"getLocaleRegions(languageCode: string): Promise<{ code: string; name: string; isCommon: boolean; }[]>",
			description:
				"Get all available locale regions for a given language.\n\n@alpha\n@param languageCode - The language code to get regions for. Use `getLocaleLanguages` to get valid language codes.\n@returns A list of region codes, their display names, and whether they are commonly paired with the given language.",
			references: [],
		},
		{
			name: "getLocales",
			category: "framer",
			signature: "getLocales(): Promise<readonly Locale[]>",
			description:
				"Get all Locales in the project.\n\nDoes not include the default Locale. See `getDefaultLocale`.\n\n@example\n```ts\nconst locales = await framer.getLocales()\n```",
			references: ["Locale"],
		},
		{
			name: "getLocalizationGroups",
			category: "framer",
			signature:
				"getLocalizationGroups(): Promise<readonly LocalizationGroup[]>",
			description:
				"Get all Localization Groups in the project.\n\n@example\n```ts\nconst groups = await framer.getLocalizationGroups()\n\nfor (const group of groups) {\n    console.log(`Group: ${group.name}`)\n\n    for (const source of group.sources) {\n        console.log(`Source: ${source.value}`)\n    }\n}\n```",
			references: ["LocalizationGroup"],
		},
		{
			name: "getManagedCollections",
			category: "framer",
			signature: "getManagedCollections(): Promise<ManagedCollection[]>",
			description:
				"Retrieve Collections that are managed by the current Plugin.\n\n- Only Collections created or controlled by your Plugin appear in this list.\n- These Collections can be modified without the restrictions placed on user-created Collections.\n\n@example\n```ts\nconst managedCollections = await framer.getManagedCollections();\n```",
			references: ["ManagedCollection"],
		},
		{
			name: "getNode",
			category: "framer",
			signature: "getNode(nodeId: NodeId): Promise<AnyNode | null>",
			description: "Get a node by its id.",
			references: ["AnyNode"],
		},
		{
			name: "getNodesWithAttribute",
			category: "framer",
			signature: "getNodesWithAttribute(attribute: T): Promise<Node[]>",
			description: "Get all nodes with a certain attribute.",
			references: ["T", "Node"],
		},
		{
			name: "getNodesWithAttributeSet",
			category: "framer",
			signature: "getNodesWithAttributeSet(attribute: T): Promise<Node[]>",
			description: "Get all nodes with a certain attribute which value is set.",
			references: ["T", "Node"],
		},
		{
			name: "getNodesWithType",
			category: "framer",
			signature: 'getNodesWithType(type: "FrameNode"): Promise<FrameNode[]>',
			description: "Get all nodes of a certain class.",
			references: ["FrameNode"],
		},
		{
			name: "getParent",
			category: "framer",
			signature: "getParent(nodeId: NodeId): Promise<AnyNode | null>",
			description: "Get the parent of a node.",
			references: ["AnyNode"],
		},
		{
			name: "getProjectInfo",
			category: "framer",
			signature: "getProjectInfo(): Promise<ProjectInfo>",
			description: "Get the project info like name and id.",
			references: ["ProjectInfo"],
		},
		{
			name: "getPublishInfo",
			category: "framer",
			signature: "getPublishInfo(): Promise<PublishInfo>",
			description:
				"Get information about the published website, such as the time of the most\nrecent deploy, or the URL of the current page. Provides information about\nboth `staging` and `production` environments (either may be `null` if the\nsite has never been published).\n\n@returns The current publish info for both staging and production.",
			references: ["PublishInfo"],
		},
		{
			name: "getRect",
			category: "framer",
			signature: "getRect(nodeId: NodeId): Promise<Rect$1 | null>",
			description: "Get the rect of a node",
			references: ["Rect$1"],
		},
		{
			name: "getRedirects",
			category: "framer",
			signature: "getRedirects(): Promise<readonly Redirect[]>",
			description:
				"Get all Redirects in the project.\n\n@returns All of the Redirects in the project.\n\n@example\n```ts\nconst redirects = await framer.getRedirects()\n```",
			references: ["Redirect"],
		},
		{
			name: "getText",
			category: "framer",
			signature: "getText(): Promise<string | null>",
			description:
				"Get plaintext of the current selection or null if there is no text.",
			references: [],
		},
		{
			name: "getTextStyle",
			category: "framer",
			signature: "getTextStyle(id: NodeId): Promise<TextStyle | null>",
			description: "Get a specific text style.",
			references: ["TextStyle"],
		},
		{
			name: "getTextStyles",
			category: "framer",
			signature: "getTextStyles(): Promise<TextStyle[]>",
			description: "Get all text styles in the project.",
			references: ["TextStyle"],
		},
		{
			name: "getVectorSets",
			category: "framer",
			signature: "getVectorSets(): Promise<VectorSet[]>",
			description: "Get all available vector sets.\n\n@alpha",
			references: ["VectorSet"],
		},
		{
			name: "mode",
			category: "framer",
			signature: "mode: Mode",
			description:
				'Get the current mode. A plugin can launch in a special mode where only a\nsubset of the API is allowed. The mode is set when the plugin launches\nand never changes while the plugin is active.\n\n@example\n```ts\nif (framer.mode === "image" || framer.mode === "editImage") {\n  // Do image mode specific logic\n  return\n}\n```',
			references: ["Mode"],
		},
		{
			name: "publish",
			category: "framer",
			signature: "publish(): Promise<PublishResult>",
			description: "",
			references: ["PublishResult"],
		},
		{
			name: "readProjectForAgent",
			category: "framer",
			signature:
				"readProjectForAgent(queries: Record<string, unknown>[], options?: { pagePath?: string; }): Promise<{ results: unknown[]; }>",
			description:
				'Reads project state by executing an array of queries against the project.\n\nReturns one result per query. Available query types and their parameters\nare documented in the string returned by {@link getAgentSystemPrompt}.\n\n@param queries - Array of query objects. See {@link getAgentSystemPrompt} for available types.\n@param options.pagePath - Target page path (e.g. `"/about"`). Defaults to the active page.\n@returns An object with a `results` array, one entry per query.',
			references: [],
		},
		{
			name: "rejectAllPending",
			category: "framer",
			signature: "rejectAllPending(error: FramerPluginError): void",
			description: "",
			references: ["FramerPluginError"],
		},
		{
			name: "removeNodes",
			category: "framer",
			signature: "removeNodes(nodeIds: NodeId[]): Promise<void>",
			description: "Remove nodes from the canvas.",
			references: [],
		},
		{
			name: "removeRedirects",
			category: "framer",
			signature: "removeRedirects(redirectIds: string[]): Promise<void>",
			description:
				"Remove Redirects from the project. Unknown Redirect IDs are ignored.\n\nThrows a `FramerPluginError` when the user lacks Site Settings permissions\nor when the project plan does not include Redirects.\n\n@param redirectIds - An array of Redirect IDs to remove.\n\n@example\n```ts\nawait framer.removeRedirects([aboutPageRedirect.id, blogPageRedirect.id])\n```",
			references: [],
		},
		{
			name: "requestId",
			category: "framer",
			signature: "requestId: string",
			description: "",
			references: [],
		},
		{
			name: "screenshot",
			category: "framer",
			signature:
				"screenshot(nodeId: string, options?: ScreenshotOptions): Promise<ScreenshotResult>",
			description: "",
			references: ["ScreenshotOptions", "ScreenshotResult"],
		},
		{
			name: "setAttributes",
			category: "framer",
			signature:
				"setAttributes(nodeId: NodeId, attributes: Partial<AnyEditableAttributes>): Promise<AnyNode | null>",
			description: "Set the attributes of a node.",
			references: ["AnyEditableAttributes", "AnyNode"],
		},
		{
			name: "setCloseWarning",
			category: "framer",
			signature: "setCloseWarning(message: string | false): Promise<void>",
			description:
				'When enabled, a modal confirmation will appear before close to confirm the action.\n\nPass `false` to disable the warning.\n\n@param message - The message to show when attempting to close the plugin. `false` disables the warning.\n\n@example\n```ts\n// Show a close warning when the user attempts to close the plugin\nawait framer.setCloseWarning("Are you sure?")\n\n// Remove the close warning\nawait framer.setCloseWarning(false)\n```',
			references: [],
		},
		{
			name: "setCustomCode",
			category: "framer",
			signature: "setCustomCode(options: SetCustomCodeOptions): Promise<void>",
			description:
				'Install a custom code snippet in the user\'s website via `<script>` tags.\nA plugin can only set custom HTML once per location. Custom code should be\nvalid HTML. Setting `html` to `null` clears the installed code snippet.\n\n@param options - The custom code options including `html` and `location`.\n\n@example\n```ts\nframer.setCustomCode({\n  html: \'<script src="https://example.com/script.js"></script>\',\n  location: "bodyEnd"\n})\n```',
			references: ["SetCustomCodeOptions"],
		},
		{
			name: "setImage",
			category: "framer",
			signature: "setImage(image: NamedImageAssetInput | File): Promise<void>",
			description:
				"Upload an image and set it on the selected node.\n\nIn `image` or `editImage` mode, this is the primary method to send the\nselected or edited image back to Framer.",
			references: ["NamedImageAssetInput", "File"],
		},
		{
			name: "setLocalizationData",
			category: "framer",
			signature:
				"setLocalizationData(update: LocalizationData): Promise<SetLocalizationDataResult>",
			description:
				'Update localization data.\n\n@param update - An object representing the localization update.\n\n@example\n```ts\nawait framer.setLocalizationData({\n    valuesBySource: {\n        [titleSourceId]: {\n            [dutchLocaleId]: { action: "set", value: "Hallo Wereld" }\n        }\n    },\n    statusByLocaleByGroup: {\n        [blogPostGroupId]: {\n            [dutchLocaleId]: "ready",\n            [frenchLocaleId]: "excluded"\n        }\n    }\n})\n```',
			references: ["LocalizationData", "SetLocalizationDataResult"],
		},
		{
			name: "setParent",
			category: "framer",
			signature:
				"setParent(nodeId: NodeId, parentId: NodeId, index?: number | undefined): Promise<void>",
			description: "Set the parent of a node.",
			references: [],
		},
		{
			name: "setRedirectOrder",
			category: "framer",
			signature: "setRedirectOrder(redirectIds: string[]): Promise<void>",
			description:
				"Set the order of Redirects in the list. Unknown Redirect IDs are ignored.\n\nThrows a `FramerPluginError` when the user lacks Site Settings permissions\nor when the project plan does not include Redirects.\n\n@param redirectIds - An array of Redirect IDs representing the desired order.\n\n@example\n```ts\nawait framer.setRedirectOrder([aboutPageRedirect.id, blogPageRedirect.id])\n```",
			references: [],
		},
		{
			name: "setSelection",
			category: "framer",
			signature:
				"setSelection(nodeIds: string | Iterable<string>): Promise<void>",
			description: "Set the current selection.",
			references: [],
		},
		{
			name: "setText",
			category: "framer",
			signature: "setText(text: string): Promise<void>",
			description:
				"Set the text of the current selection or insert it onto the canvas.",
			references: [],
		},
		{
			name: "typecheckCode",
			category: "framer",
			signature:
				"typecheckCode(fileName: string, content: string, compilerOptions?: ts.server.protocol.CompilerOptions, sessionId?: string): Promise<TypecheckDiagnostic[]>",
			description:
				"Type check a code file and return the diagnostics.\n\n@param fileName - The name of the code file, must include the extension. Use `*.tsx` for TSX files, otherwise the React JSX syntax will be rejected.\n@param content - The content of the code file.\n@param compilerOptions - Optional compiler options to override the default compiler options for type checking.\n@param sessionId - Optional session ID. Pass it when repeatedly type checking the same file. If not provided, a new session will be created for each type check, which is slow.",
			references: ["ts.server.protocol.CompilerOptions", "TypecheckDiagnostic"],
		},
		{
			name: "uploadFile",
			category: "framer",
			signature:
				"uploadFile(file: NamedFileAssetInput | File): Promise<FileAsset>",
			description: "Uploads a file without assigning it to a property.",
			references: ["NamedFileAssetInput", "File", "FileAsset"],
		},
		{
			name: "uploadFiles",
			category: "framer",
			signature:
				"uploadFiles(files: readonly NamedFileAssetInput[]): Promise<FileAsset[]>",
			description:
				"Upload multiple files without assigning them to properties.",
			references: ["NamedFileAssetInput", "FileAsset"],
		},
		{
			name: "uploadImage",
			category: "framer",
			signature:
				"uploadImage(image: NamedImageAssetInput | File): Promise<ImageAsset>",
			description: "Upload an image without assigning it to a property.",
			references: ["NamedImageAssetInput", "File", "ImageAsset"],
		},
		{
			name: "uploadImages",
			category: "framer",
			signature:
				"uploadImages(images: readonly NamedImageAssetInput[]): Promise<ImageAsset[]>",
			description:
				"Upload multiple images without assigning them to properties.",
			references: ["NamedImageAssetInput", "ImageAsset"],
		},
	],
	imageasset: [
		{
			name: "altText",
			category: "ImageAsset",
			signature: "altText: string | undefined",
			description: "Optional Alt Text of the image.",
			references: [],
		},
		{
			name: "cloneWithAttributes",
			category: "ImageAsset",
			signature:
				'cloneWithAttributes({ altText, resolution, }: Prettify<Partial<Pick<ImageAssetData, "altText" | "resolution">>>): ImageAsset',
			description:
				"Clone this image asset, optionally overriding `altText` or `resolution`.\nThe clone shares the same underlying image data.",
			references: ["Prettify", "ImageAssetData", "ImageAsset"],
		},
		{
			name: "getData",
			category: "ImageAsset",
			signature: "getData(): Promise<BytesData>",
			description:
				"Get the data such as the bytes of the image. The bytes can be used to manipulate the pixels\nof the image.",
			references: ["BytesData"],
		},
		{
			name: "loadBitmap",
			category: "ImageAsset",
			signature: "loadBitmap(): Promise<ImageBitmap>",
			description: "Load this image as `ImageBitmap`.",
			references: ["ImageBitmap"],
		},
		{
			name: "loadImage",
			category: "ImageAsset",
			signature: "loadImage(): Promise<HTMLImageElement>",
			description: "Load this image as `HTMLImageElement`.",
			references: ["HTMLImageElement"],
		},
		{
			name: "measure",
			category: "ImageAsset",
			signature: "measure(): Promise<Size>",
			description:
				"Measure this image's natural dimensions.\n\n@returns The width and height in pixels. Warning: values may be zero.",
			references: ["Size"],
		},
		{
			name: "resolution",
			category: "ImageAsset",
			signature: "resolution: Resolution",
			description: 'The resolution set on the image. Defaults to "auto"',
			references: ["Resolution"],
		},
		{
			name: "thumbnailUrl",
			category: "ImageAsset",
			signature: "thumbnailUrl: string",
			description: "Thumbnail URL of the image.",
			references: [],
		},
		{
			name: "url",
			category: "ImageAsset",
			signature: "url: string",
			description:
				"Something that can be rendered within the iFrame. Always the original size of the image",
			references: [],
		},
	],
	imagefield: [
		{
			name: "id",
			category: "ImageField",
			signature: "id: string",
			description: "The unique identifier of the field.",
			references: [],
		},
		{
			name: "name",
			category: "ImageField",
			signature: "name: string",
			description: "The display name of the field as shown in the UI.",
			references: [],
		},
		{
			name: "remove",
			category: "ImageField",
			signature: "remove(): Promise<void>",
			description:
				'Remove this field.\n\nUse `"Field.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "required",
			category: "ImageField",
			signature: "required: boolean",
			description:
				"Whether this field is required. Required fields must have a value set on every CMS item.",
			references: [],
		},
		{
			name: "setAttributes",
			category: "ImageField",
			signature:
				"setAttributes(attributes: UpdateFieldAttributes<typeof this>): Promise<typeof this | null>",
			description:
				'Use to rename any field:\n\n```ts\nconst updatedField = await field.setAttributes({ name: "New Name" })\n```\n\nAnd to set other attributes too, but make sure to narrow based on field\'s `type` first, as to\navoid potential bugs:\n\n```ts\nif (field.type === "file") await field.setAttributes({ allowedFileTypes: ["txt", "md"] })\n```\n\nReturns the updated field on success, and `null` in the unlikely event of it being removed\nbetween getting it and calling this method.\n\n@param attributes - The attributes to update.\n\nUse `"Field.setAttributes"` to check if this method is allowed.',
			references: ["UpdateFieldAttributes"],
		},
	],
	imagevariable: [
		{
			name: "remove",
			category: "ImageVariable",
			signature: "remove(): Promise<void>",
			description:
				'Remove this variable.\n\nUse `"Variable.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setAttributes",
			category: "ImageVariable",
			signature:
				"setAttributes(attributes: UpdateVariableAttributes<typeof this>): Promise<typeof this | null>",
			description:
				'Use to rename or change the description of this variable:\n\n```ts\nconst updatedVariable = await variable.setAttributes({ name: "New Name" })\n```\n\nAnd to update other attributes too, but make sure to narrow using `instanceof` first, as to\navoid potential bugs:\n\n```ts\nif (variable instanceof FileVariable) await variable.setAttributes({ allowedFileTypes: ["txt", "md"] })\n```\n\nReturns the updated variable on success, and `null` in the unlikely event of it being removed\nbetween getting it and calling this method.\n\nUse `"Variable.setAttributes"` to check if this method is allowed.',
			references: ["UpdateVariableAttributes"],
		},
	],
	lineargradient: [
		{
			name: "angle",
			category: "LinearGradient",
			signature: "angle: number",
			description: "0-360",
			references: [],
		},
		{
			name: "stops",
			category: "LinearGradient",
			signature: "stops: readonly ColorStop[]",
			description: "Color stops with position",
			references: ["ColorStop"],
		},
	],
	linkfield: [
		{
			name: "id",
			category: "LinkField",
			signature: "id: string",
			description: "The unique identifier of the field.",
			references: [],
		},
		{
			name: "name",
			category: "LinkField",
			signature: "name: string",
			description: "The display name of the field as shown in the UI.",
			references: [],
		},
		{
			name: "remove",
			category: "LinkField",
			signature: "remove(): Promise<void>",
			description:
				'Remove this field.\n\nUse `"Field.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "required",
			category: "LinkField",
			signature: "required: boolean",
			description:
				"Whether this field is required. Required fields must have a value set on every CMS item.",
			references: [],
		},
		{
			name: "setAttributes",
			category: "LinkField",
			signature:
				"setAttributes(attributes: UpdateFieldAttributes<typeof this>): Promise<typeof this | null>",
			description:
				'Use to rename any field:\n\n```ts\nconst updatedField = await field.setAttributes({ name: "New Name" })\n```\n\nAnd to set other attributes too, but make sure to narrow based on field\'s `type` first, as to\navoid potential bugs:\n\n```ts\nif (field.type === "file") await field.setAttributes({ allowedFileTypes: ["txt", "md"] })\n```\n\nReturns the updated field on success, and `null` in the unlikely event of it being removed\nbetween getting it and calling this method.\n\n@param attributes - The attributes to update.\n\nUse `"Field.setAttributes"` to check if this method is allowed.',
			references: ["UpdateFieldAttributes"],
		},
	],
	linkvariable: [
		{
			name: "remove",
			category: "LinkVariable",
			signature: "remove(): Promise<void>",
			description:
				'Remove this variable.\n\nUse `"Variable.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setAttributes",
			category: "LinkVariable",
			signature:
				"setAttributes(attributes: UpdateVariableAttributes<typeof this>): Promise<typeof this | null>",
			description:
				'Use to rename or change the description of this variable:\n\n```ts\nconst updatedVariable = await variable.setAttributes({ name: "New Name" })\n```\n\nAnd to update other attributes too, but make sure to narrow using `instanceof` first, as to\navoid potential bugs:\n\n```ts\nif (variable instanceof FileVariable) await variable.setAttributes({ allowedFileTypes: ["txt", "md"] })\n```\n\nReturns the updated variable on success, and `null` in the unlikely event of it being removed\nbetween getting it and calling this method.\n\nUse `"Variable.setAttributes"` to check if this method is allowed.',
			references: ["UpdateVariableAttributes"],
		},
	],
	managedcollection: [
		{
			name: "addItems",
			category: "ManagedCollection",
			signature: "addItems(items: ManagedCollectionItemInput[]): Promise<void>",
			description:
				'Add new items or update existing ones if their IDs match. This method\nperforms an upsert: items with matching IDs are updated, new IDs are\ninserted.\n\nEach item requires an `id` and `slug`. Custom field data is provided via\nthe `fieldData` object, using field IDs as keys.\n\nCurrently, calling `addItems` with existing item IDs merges the provided\nfield data with the existing items\' current field data, meaning any\nomitted fields remain unchanged. In version 4.0.0, this behavior will\nchange to fully replace items, removing any fields not explicitly\nincluded. Always include all fields when updating existing items to avoid\nunexpected behavior.\n\nUse `"ManagedCollection.addItems"` to check if this method is allowed.\n\n@param items - An array of items to add or update.\n\n@example\n```ts\nawait collection.addItems([\n  {\n    id: "1",\n    slug: "item-1",\n    fieldData: {\n      [nameField.id]: { type: "string", value: "Eric" },\n      [ageField.id]: { type: "number", value: 47 },\n    },\n  },\n])\n```',
			references: ["ManagedCollectionItemInput"],
		},
		{
			name: "getFields",
			category: "ManagedCollection",
			signature: "getFields(): Promise<ManagedCollectionField[]>",
			description:
				"Get all fields defined on this Managed Collection.\n\n@returns An array of managed collection field definitions.\n\n@example\n```ts\nconst fields = await collection.getFields()\n```",
			references: ["ManagedCollectionField"],
		},
		{
			name: "getItemIds",
			category: "ManagedCollection",
			signature: "getItemIds(): Promise<string[]>",
			description:
				"Retrieve all item IDs in this Managed Collection, in their current order.\n\n@returns An array of item IDs.\n\n@example\n```ts\nconst itemIds = await collection.getItemIds()\n```",
			references: [],
		},
		{
			name: "getPluginData",
			category: "ManagedCollection",
			signature: "getPluginData(key: string): Promise<string | null>",
			description:
				'Get plugin data by key.\n\n@param key - The plugin data key.\n\n@example\n```ts\nconst lastSynchronized = await collection.getPluginData("lastSynchronizedAt")\n```',
			references: [],
		},
		{
			name: "getPluginDataKeys",
			category: "ManagedCollection",
			signature: "getPluginDataKeys(): Promise<string[]>",
			description: "Get all plugin data keys.",
			references: [],
		},
		{
			name: "managedBy",
			category: "ManagedCollection",
			signature: "managedBy: ManagedCollectionManagedBy",
			description:
				'Returns who manages this Collection.\n\n- `"thisPlugin"` if the Collection is managed by the current plugin.\n- `"anotherPlugin"` if the Collection is managed by a different plugin.\n\nCollections managed by other plugins are read-only.',
			references: ["ManagedCollectionManagedBy"],
		},
		{
			name: "navigateTo",
			category: "ManagedCollection",
			signature: "navigateTo(opts?: NavigableOptions): Promise<void>",
			description:
				"Navigate to this collection. May switch modes to reveal the relevant view.",
			references: ["NavigableOptions"],
		},
		{
			name: "removeItems",
			category: "ManagedCollection",
			signature: "removeItems(itemIds: string[]): Promise<void>",
			description:
				'Remove CMS items by their ID.\n\nUse `"ManagedCollection.removeItems"` to check if this method is allowed.\n\n@param itemIds - The IDs of the items to remove.\n\n@example\n```ts\nawait collection.removeItems([item1.id, item5.id])\n```',
			references: [],
		},
		{
			name: "setAsActive",
			category: "ManagedCollection",
			signature: "setAsActive(): Promise<void>",
			description:
				"Open this Collection in the Editor, making it the active selection in\nthe Framer UI.\n\n@example\n```ts\nawait collection.setAsActive()\n```",
			references: [],
		},
		{
			name: "setFields",
			category: "ManagedCollection",
			signature:
				"setFields(fields: ManagedCollectionFieldInput[]): Promise<void>",
			description:
				'Add, update, or remove Collection fields. Fields not included in the\narray will be removed. You can configure up to 30 custom fields.\n\nEach field requires an `id`, `name`, and `type`. For the `id`, use a\nunique identifier that stays the same across future synchronizations.\nAny change in `id` can break data assignments on the canvas. The maximum\nlength for an `id` is 64 characters.\n\nBy default, managed collection fields set by a plugin are not editable by\nusers. Set `userEditable: true` on a field to allow user editing. Note\nthat fields marked as `userEditable` can no longer have their values set\nby the plugin when using `addItems`.\n\nUse `"ManagedCollection.setFields"` to check if this method is allowed.\n\n@param fields - The array of fields that should be used for the collection.\n\n@example\n```ts\nawait collection.setFields([\n  { id: "1", type: "string", name: "Name" },\n  { id: "2", type: "number", name: "Age" },\n  { id: "3", type: "string", name: "Description", userEditable: true },\n])\n```',
			references: ["ManagedCollectionFieldInput"],
		},
		{
			name: "setItemOrder",
			category: "ManagedCollection",
			signature: "setItemOrder(ids: string[]): Promise<void>",
			description:
				'Arrange CMS items in a specific order.\n\nUse `"ManagedCollection.setItemOrder"` to check if this method is allowed.\n\n@param ids - An array of item IDs in the desired order. Unknown IDs are ignored.\n\n@example\n```ts\nawait collection.setItemOrder([item3.id, item1.id, item2.id])\n```',
			references: [],
		},
		{
			name: "setPluginData",
			category: "ManagedCollection",
			signature:
				"setPluginData(key: string, value: string | null): Promise<void>",
			description:
				'Set plugin data by key. Similar to local storage, you can store custom\ndata on the Managed Collection (e.g., the last synchronization date or a\nconnected database ID).\n\nUse `"ManagedCollection.setPluginData"` to check if this method is allowed.\n\n@param key - The plugin data key.\n@param value - The value to set, or `null` to remove.\n\n@example\n```ts\nconst currentDate = new Date().toISOString()\nawait collection.setPluginData("lastSynchronizedAt", currentDate)\n```',
			references: [],
		},
	],
	multicollectionreferencefield: [
		{
			name: "collectionId",
			category: "MultiCollectionReferenceField",
			signature: "collectionId: string",
			description: "The ID of the referenced collection.",
			references: [],
		},
		{
			name: "id",
			category: "MultiCollectionReferenceField",
			signature: "id: string",
			description: "The unique identifier of the field.",
			references: [],
		},
		{
			name: "name",
			category: "MultiCollectionReferenceField",
			signature: "name: string",
			description: "The display name of the field as shown in the UI.",
			references: [],
		},
		{
			name: "remove",
			category: "MultiCollectionReferenceField",
			signature: "remove(): Promise<void>",
			description:
				'Remove this field.\n\nUse `"Field.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "required",
			category: "MultiCollectionReferenceField",
			signature: "required: boolean",
			description:
				"Whether this field is required. Required fields must have a value set on every CMS item.",
			references: [],
		},
		{
			name: "setAttributes",
			category: "MultiCollectionReferenceField",
			signature:
				"setAttributes(attributes: UpdateFieldAttributes<typeof this>): Promise<typeof this | null>",
			description:
				'Use to rename any field:\n\n```ts\nconst updatedField = await field.setAttributes({ name: "New Name" })\n```\n\nAnd to set other attributes too, but make sure to narrow based on field\'s `type` first, as to\navoid potential bugs:\n\n```ts\nif (field.type === "file") await field.setAttributes({ allowedFileTypes: ["txt", "md"] })\n```\n\nReturns the updated field on success, and `null` in the unlikely event of it being removed\nbetween getting it and calling this method.\n\n@param attributes - The attributes to update.\n\nUse `"Field.setAttributes"` to check if this method is allowed.',
			references: ["UpdateFieldAttributes"],
		},
	],
	numberfield: [
		{
			name: "id",
			category: "NumberField",
			signature: "id: string",
			description: "The unique identifier of the field.",
			references: [],
		},
		{
			name: "name",
			category: "NumberField",
			signature: "name: string",
			description: "The display name of the field as shown in the UI.",
			references: [],
		},
		{
			name: "remove",
			category: "NumberField",
			signature: "remove(): Promise<void>",
			description:
				'Remove this field.\n\nUse `"Field.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setAttributes",
			category: "NumberField",
			signature:
				"setAttributes(attributes: UpdateFieldAttributes<typeof this>): Promise<typeof this | null>",
			description:
				'Use to rename any field:\n\n```ts\nconst updatedField = await field.setAttributes({ name: "New Name" })\n```\n\nAnd to set other attributes too, but make sure to narrow based on field\'s `type` first, as to\navoid potential bugs:\n\n```ts\nif (field.type === "file") await field.setAttributes({ allowedFileTypes: ["txt", "md"] })\n```\n\nReturns the updated field on success, and `null` in the unlikely event of it being removed\nbetween getting it and calling this method.\n\n@param attributes - The attributes to update.\n\nUse `"Field.setAttributes"` to check if this method is allowed.',
			references: ["UpdateFieldAttributes"],
		},
	],
	numbervariable: [
		{
			name: "remove",
			category: "NumberVariable",
			signature: "remove(): Promise<void>",
			description:
				'Remove this variable.\n\nUse `"Variable.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setAttributes",
			category: "NumberVariable",
			signature:
				"setAttributes(attributes: UpdateVariableAttributes<typeof this>): Promise<typeof this | null>",
			description:
				'Use to rename or change the description of this variable:\n\n```ts\nconst updatedVariable = await variable.setAttributes({ name: "New Name" })\n```\n\nAnd to update other attributes too, but make sure to narrow using `instanceof` first, as to\navoid potential bugs:\n\n```ts\nif (variable instanceof FileVariable) await variable.setAttributes({ allowedFileTypes: ["txt", "md"] })\n```\n\nReturns the updated variable on success, and `null` in the unlikely event of it being removed\nbetween getting it and calling this method.\n\nUse `"Variable.setAttributes"` to check if this method is allowed.',
			references: ["UpdateVariableAttributes"],
		},
	],
	radialgradient: [
		{
			name: "height",
			category: "RadialGradient",
			signature: "height: CSSDimension<CSSUnit.Percentage>",
			description: "Relative height",
			references: ["CSSDimension", "CSSUnit.Percentage"],
		},
		{
			name: "stops",
			category: "RadialGradient",
			signature: "stops: readonly ColorStop[]",
			description: "Color stops with position",
			references: ["ColorStop"],
		},
		{
			name: "width",
			category: "RadialGradient",
			signature: "width: CSSDimension<CSSUnit.Percentage>",
			description: "Relative width",
			references: ["CSSDimension", "CSSUnit.Percentage"],
		},
		{
			name: "x",
			category: "RadialGradient",
			signature: "x: CSSDimension<CSSUnit.Percentage>",
			description: "Relative horizontal position",
			references: ["CSSDimension", "CSSUnit.Percentage"],
		},
		{
			name: "y",
			category: "RadialGradient",
			signature: "y: CSSDimension<CSSUnit.Percentage>",
			description: "Relative vertical position",
			references: ["CSSDimension", "CSSUnit.Percentage"],
		},
	],
	redirect: [
		{
			name: "expandToAllLocales",
			category: "Redirect",
			signature: "expandToAllLocales: boolean",
			description:
				'Whether the redirect is expanded to all locales. When enabled, the\nredirect will apply not only in the base locale, but also in all\nother locales in the project.\n\nFor example, for a project with a Spanish locale, the following\nwould redirect both `/business` to `/enterprise`, and\n`/es/business` to `/es/enterprise`.\n\n@example\n```ts\nawait framer.addRedirects([\n  { from: "/business", to: "/enterprise", expandToAllLocales: true }\n])\n```',
			references: [],
		},
		{
			name: "from",
			category: "Redirect",
			signature: "from: string",
			description: "The source path of the redirect.",
			references: [],
		},
		{
			name: "id",
			category: "Redirect",
			signature: "id: string",
			description: "A unique identifier for the redirect.",
			references: [],
		},
		{
			name: "remove",
			category: "Redirect",
			signature: "remove(): Promise<void>",
			description:
				"Remove the redirect.\n\n@returns A promise that resolves when the redirect is removed.\n\n@example\n```ts\nawait redirect.remove()\n```",
			references: [],
		},
		{
			name: "setAttributes",
			category: "Redirect",
			signature:
				"setAttributes(attributes: Partial<CreateRedirect>): Promise<Redirect | null>",
			description:
				'Set the attributes of a redirect.\n\n@param attributes - The updated attributes and their new values.\n@returns The updated redirect, or `null` if the redirect was not found.\n@throws When the current user does not have permission to edit Site Settings, a `FramerPluginError` is thrown.\n@throws When the current project is not on a plan that includes redirects, a `FramerPluginError` is thrown.\n\n@example\n```ts\nawait redirect.setAttributes({ from: "/new-url" })\n```',
			references: ["CreateRedirect", "Redirect"],
		},
		{
			name: "to",
			category: "Redirect",
			signature: "to: string | null",
			description:
				"The destination path of the redirect.\n\nWhen a redirect points to an existing page, the `to` value will\nalways point to that page. This property will be set to `null` if\nthe page it points to was removed.",
			references: [],
		},
	],
	stringfield: [
		{
			name: "basedOn",
			category: "StringField",
			signature: "basedOn: string | null",
			description:
				"The ID of the field on which this field is based.\n\nWhen set, this field will use the referenced field's value as a fallback\nwhen no value is provided.",
			references: [],
		},
		{
			name: "id",
			category: "StringField",
			signature: "id: string",
			description: "The unique identifier of the field.",
			references: [],
		},
		{
			name: "name",
			category: "StringField",
			signature: "name: string",
			description: "The display name of the field as shown in the UI.",
			references: [],
		},
		{
			name: "remove",
			category: "StringField",
			signature: "remove(): Promise<void>",
			description:
				'Remove this field.\n\nUse `"Field.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "required",
			category: "StringField",
			signature: "required: boolean",
			description:
				"Whether this field is required. Required fields must have a value set on every CMS item.",
			references: [],
		},
		{
			name: "setAttributes",
			category: "StringField",
			signature:
				"setAttributes(attributes: UpdateFieldAttributes<typeof this>): Promise<typeof this | null>",
			description:
				'Use to rename any field:\n\n```ts\nconst updatedField = await field.setAttributes({ name: "New Name" })\n```\n\nAnd to set other attributes too, but make sure to narrow based on field\'s `type` first, as to\navoid potential bugs:\n\n```ts\nif (field.type === "file") await field.setAttributes({ allowedFileTypes: ["txt", "md"] })\n```\n\nReturns the updated field on success, and `null` in the unlikely event of it being removed\nbetween getting it and calling this method.\n\n@param attributes - The attributes to update.\n\nUse `"Field.setAttributes"` to check if this method is allowed.',
			references: ["UpdateFieldAttributes"],
		},
	],
	stringvariable: [
		{
			name: "remove",
			category: "StringVariable",
			signature: "remove(): Promise<void>",
			description:
				'Remove this variable.\n\nUse `"Variable.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setAttributes",
			category: "StringVariable",
			signature:
				"setAttributes(attributes: UpdateVariableAttributes<typeof this>): Promise<typeof this | null>",
			description:
				'Use to rename or change the description of this variable:\n\n```ts\nconst updatedVariable = await variable.setAttributes({ name: "New Name" })\n```\n\nAnd to update other attributes too, but make sure to narrow using `instanceof` first, as to\navoid potential bugs:\n\n```ts\nif (variable instanceof FileVariable) await variable.setAttributes({ allowedFileTypes: ["txt", "md"] })\n```\n\nReturns the updated variable on success, and `null` in the unlikely event of it being removed\nbetween getting it and calling this method.\n\nUse `"Variable.setAttributes"` to check if this method is allowed.',
			references: ["UpdateVariableAttributes"],
		},
	],
	svgnode: [
		{
			name: "bottom",
			category: "SVGNode",
			signature: "bottom: CSSDimension<CSSUnit.Pixel> | null",
			description:
				'Distance from bottom edge when using absolute/fixed positioning.\nOnly applies when position is not `"relative"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Pixel"],
		},
		{
			name: "centerX",
			category: "SVGNode",
			signature: "centerX: CSSDimension<CSSUnit.Percentage> | null",
			description:
				'Center anchor horizontal position as percentage (e.g. `"50%"`).\nUsed when pins are not set.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Percentage"],
		},
		{
			name: "centerY",
			category: "SVGNode",
			signature: "centerY: CSSDimension<CSSUnit.Percentage> | null",
			description:
				'Center anchor vertical position as percentage (e.g. `"50%"`).\nUsed when pins are not set.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Percentage"],
		},
		{
			name: "clone",
			category: "SVGNode",
			signature:
				'clone(): Promise<(typeof this)[ClassKey] extends "UnknownNode" ? never : typeof this | null>',
			description:
				'Clone this node, creating a duplicate in the canvas tree.\n\n@returns The cloned node, or `null` if the clone failed.\n@throws If the node is an `UnknownNode`.\n\nUse `"Node.clone"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "getChildren",
			category: "SVGNode",
			signature: "getChildren(): Promise<CanvasNode[]>",
			description:
				"Get the children of this node in the canvas tree.\n\n@returns An array of child nodes. Returns an empty array for `UnknownNode`.",
			references: ["CanvasNode"],
		},
		{
			name: "getNodesWithAttribute",
			category: "SVGNode",
			signature: "getNodesWithAttribute(attribute: T): Promise<Node[]>",
			description:
				'Get the descendants of this node that support `attribute`. This\nreturns nodes that have the given attribute defined in their type,\nregardless of whether it has been set.\n\n@param attribute - The attribute name to filter by.\n@returns An array of nodes that support the attribute.\n\n@example\n```ts\n// Get any kind of node that has a background color attribute.\nconst nodes = await framer.getNodesWithAttribute("backgroundColor")\n```',
			references: ["T", "Node"],
		},
		{
			name: "getNodesWithAttributeSet",
			category: "SVGNode",
			signature: "getNodesWithAttributeSet(attribute: T): Promise<Node[]>",
			description:
				'Get the descendants of this node that have `attribute` set to a\nnon-null value.\n\n@param attribute - The attribute name to filter by.\n@returns An array of nodes that have the attribute set.\n\n@example\n```ts\n// Get all nodes with a background image set.\nconst nodes = await framer.getNodesWithAttributeSet("backgroundImage")\n```',
			references: ["T", "Node"],
		},
		{
			name: "getNodesWithType",
			category: "SVGNode",
			signature: 'getNodesWithType(type: "FrameNode"): Promise<FrameNode[]>',
			description:
				'Get descendants of this node that match the given type. This can\nalso be used to query within a selection subtree.\n\n@param type - The node type to search for.\n@returns An array of matching descendant nodes.\n\n@example\n```ts\n// Get all frame nodes in a project.\nconst frameNodes = await framer.getNodesWithType("FrameNode")\n\n// Query within a selection subtree.\nconst selection = await framer.getSelection()\nif (selection.length === 1) {\n  const frameNodes = await selection[0].getNodesWithType("FrameNode")\n}\n```',
			references: ["FrameNode"],
		},
		{
			name: "getParent",
			category: "SVGNode",
			signature: "getParent(): Promise<AnyNode | null>",
			description:
				"Get the parent of this node in the canvas tree.\n\n@returns The parent node, or `null` if this is a root node.",
			references: ["AnyNode"],
		},
		{
			name: "getPluginData",
			category: "SVGNode",
			signature: "getPluginData(key: string): Promise<string | null>",
			description:
				"Get plugin data by key. Plugin data lets you store arbitrary\nstring values on individual nodes, scoped to your plugin.\n\n@param key - The plugin data key.\n@returns The stored value, or `null` if no data exists for the key.",
			references: [],
		},
		{
			name: "getPluginDataKeys",
			category: "SVGNode",
			signature: "getPluginDataKeys(): Promise<string[]>",
			description:
				"Get all plugin data keys stored on this node.\n\n@returns An array of all plugin data keys.",
			references: [],
		},
		{
			name: "getRect",
			category: "SVGNode",
			signature: "getRect(): Promise<Rect$1 | null>",
			description:
				"Get the bounding box of this node.\n\n@returns The bounding rectangle, or `null` if unavailable.",
			references: ["Rect$1"],
		},
		{
			name: "height",
			category: "SVGNode",
			signature: "height: HeightLength | null",
			description:
				'Height of the node. Accepts pixel, percentage, fraction, viewport-height values, or `"fit-content"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["HeightLength"],
		},
		{
			name: "left",
			category: "SVGNode",
			signature: "left: CSSDimension<CSSUnit.Pixel> | null",
			description:
				'Distance from left edge when using absolute/fixed positioning.\nOnly applies when position is not `"relative"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Pixel"],
		},
		{
			name: "locked",
			category: "SVGNode",
			signature: "locked: boolean",
			description:
				"Whether the node is locked for editing. Defaults to `false`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.",
			references: [],
		},
		{
			name: "name",
			category: "SVGNode",
			signature: "name: string | null",
			description:
				"The name of the node displayed in the layers panel.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode,\nComponentNode, VectorSetNode, VectorSetItemNode.",
			references: [],
		},
		{
			name: "navigateTo",
			category: "SVGNode",
			signature:
				'navigateTo(opts?: Pick<NavigableOptions, "select" | "zoomIntoView">): Promise<void>',
			description:
				"Navigate to this node. May switch modes to reveal the relevant view.",
			references: ["NavigableOptions"],
		},
		{
			name: "opacity",
			category: "SVGNode",
			signature: "opacity: number",
			description:
				"Opacity of the node, from `0` (fully transparent) to `1` (fully opaque). Defaults to `1`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode.",
			references: [],
		},
		{
			name: "position",
			category: "SVGNode",
			signature: "position: Position",
			description:
				'Positioning behavior of the node.\n- `"relative"`: Default for nodes in stack/grid layouts\n- `"absolute"`: Positioned relative to parent\n- `"fixed"`: Positioned relative to viewport\n- `"sticky"`: Sticks to viewport edges when scrolling\n\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode.',
			references: ["Position"],
		},
		{
			name: "remove",
			category: "SVGNode",
			signature: "remove(): Promise<void>",
			description:
				'Remove this node from the canvas tree.\n\nUse `"Node.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "right",
			category: "SVGNode",
			signature: "right: CSSDimension<CSSUnit.Pixel> | null",
			description:
				'Distance from right edge when using absolute/fixed positioning.\nOnly applies when position is not `"relative"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Pixel"],
		},
		{
			name: "rotation",
			category: "SVGNode",
			signature: "rotation: number",
			description:
				"Rotation angle in degrees. Defaults to `0`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode.",
			references: [],
		},
		{
			name: "select",
			category: "SVGNode",
			signature: "select(): Promise<void>",
			description: "Select this node on the canvas.",
			references: [],
		},
		{
			name: "setAttributes",
			category: "SVGNode",
			signature:
				'setAttributes(update: Partial<NodeClassToEditableAttributes[(typeof this)[ClassKey]]>): Promise<(typeof this)[ClassKey] extends "UnknownNode" ? never : typeof this | null>',
			description:
				'Set the attributes of this node. Attributes are merged with existing\nvalues, so only the provided attributes are updated.\n\n@param update - The attributes to update.\n@returns The updated node, or `null` if the node was not found.\n@throws If the node is an `UnknownNode`.\n\nUse `"Node.setAttributes"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setPluginData",
			category: "SVGNode",
			signature:
				"setPluginData(key: string, value: string | null): Promise<void>",
			description:
				'Set plugin data by key. Plugin data lets you store arbitrary\nstring values on individual nodes, scoped to your plugin.\n\n@param key - The plugin data key.\n@param value - The value to set, or `null` to remove.\n\nUse `"Node.setPluginData"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "svg",
			category: "SVGNode",
			signature: "svg: string",
			description: "SVG markup content. Supported by SVGNode.",
			references: [],
		},
		{
			name: "top",
			category: "SVGNode",
			signature: "top: CSSDimension<CSSUnit.Pixel> | null",
			description:
				'Distance from top edge when using absolute/fixed positioning.\nOnly applies when position is not `"relative"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Pixel"],
		},
		{
			name: "visible",
			category: "SVGNode",
			signature: "visible: boolean",
			description:
				"Whether the node is visible on the canvas. Defaults to `true`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.",
			references: [],
		},
		{
			name: "walk",
			category: "SVGNode",
			signature: "walk(this: AnyNode): AsyncGenerator<AnyNode>",
			description:
				"Walk this node and its descendants recursively using an async\ngenerator. Yields nodes depth-first.",
			references: ["AnyNode"],
		},
		{
			name: "width",
			category: "SVGNode",
			signature: "width: WidthLength | null",
			description:
				'Width of the node. Accepts pixel, percentage, fraction values, or `"fit-content"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["WidthLength"],
		},
		{
			name: "zoomIntoView",
			category: "SVGNode",
			signature: "zoomIntoView(options?: ZoomIntoViewOptions): Promise<void>",
			description:
				"Pans and zooms the viewport to center the node.\n\n@param options - Options like `maxZoom` and `skipIfVisible`.",
			references: ["ZoomIntoViewOptions"],
		},
	],
	textnode: [
		{
			name: "bottom",
			category: "TextNode",
			signature: "bottom: CSSDimension<CSSUnit.Pixel> | null",
			description:
				'Distance from bottom edge when using absolute/fixed positioning.\nOnly applies when position is not `"relative"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Pixel"],
		},
		{
			name: "centerX",
			category: "TextNode",
			signature: "centerX: CSSDimension<CSSUnit.Percentage> | null",
			description:
				'Center anchor horizontal position as percentage (e.g. `"50%"`).\nUsed when pins are not set.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Percentage"],
		},
		{
			name: "centerY",
			category: "TextNode",
			signature: "centerY: CSSDimension<CSSUnit.Percentage> | null",
			description:
				'Center anchor vertical position as percentage (e.g. `"50%"`).\nUsed when pins are not set.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Percentage"],
		},
		{
			name: "clone",
			category: "TextNode",
			signature:
				'clone(): Promise<(typeof this)[ClassKey] extends "UnknownNode" ? never : typeof this | null>',
			description:
				'Clone this node, creating a duplicate in the canvas tree.\n\n@returns The cloned node, or `null` if the clone failed.\n@throws If the node is an `UnknownNode`.\n\nUse `"Node.clone"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "font",
			category: "TextNode",
			signature: "font: Font | null",
			description: "Font selection for text. Supported by TextNode.",
			references: ["Font"],
		},
		{
			name: "getChildren",
			category: "TextNode",
			signature: "getChildren(): Promise<CanvasNode[]>",
			description:
				"Get the children of this node in the canvas tree.\n\n@returns An array of child nodes. Returns an empty array for `UnknownNode`.",
			references: ["CanvasNode"],
		},
		{
			name: "getHTML",
			category: "TextNode",
			signature: "getHTML(): Promise<string | null>",
			description:
				"Get HTML of this node\n\n@alpha This an early API, and maybe heavily refactored in the future.",
			references: [],
		},
		{
			name: "getNodesWithAttribute",
			category: "TextNode",
			signature: "getNodesWithAttribute(attribute: T): Promise<Node[]>",
			description:
				'Get the descendants of this node that support `attribute`. This\nreturns nodes that have the given attribute defined in their type,\nregardless of whether it has been set.\n\n@param attribute - The attribute name to filter by.\n@returns An array of nodes that support the attribute.\n\n@example\n```ts\n// Get any kind of node that has a background color attribute.\nconst nodes = await framer.getNodesWithAttribute("backgroundColor")\n```',
			references: ["T", "Node"],
		},
		{
			name: "getNodesWithAttributeSet",
			category: "TextNode",
			signature: "getNodesWithAttributeSet(attribute: T): Promise<Node[]>",
			description:
				'Get the descendants of this node that have `attribute` set to a\nnon-null value.\n\n@param attribute - The attribute name to filter by.\n@returns An array of nodes that have the attribute set.\n\n@example\n```ts\n// Get all nodes with a background image set.\nconst nodes = await framer.getNodesWithAttributeSet("backgroundImage")\n```',
			references: ["T", "Node"],
		},
		{
			name: "getNodesWithType",
			category: "TextNode",
			signature: 'getNodesWithType(type: "FrameNode"): Promise<FrameNode[]>',
			description:
				'Get descendants of this node that match the given type. This can\nalso be used to query within a selection subtree.\n\n@param type - The node type to search for.\n@returns An array of matching descendant nodes.\n\n@example\n```ts\n// Get all frame nodes in a project.\nconst frameNodes = await framer.getNodesWithType("FrameNode")\n\n// Query within a selection subtree.\nconst selection = await framer.getSelection()\nif (selection.length === 1) {\n  const frameNodes = await selection[0].getNodesWithType("FrameNode")\n}\n```',
			references: ["FrameNode"],
		},
		{
			name: "getParent",
			category: "TextNode",
			signature: "getParent(): Promise<AnyNode | null>",
			description:
				"Get the parent of this node in the canvas tree.\n\n@returns The parent node, or `null` if this is a root node.",
			references: ["AnyNode"],
		},
		{
			name: "getPluginData",
			category: "TextNode",
			signature: "getPluginData(key: string): Promise<string | null>",
			description:
				"Get plugin data by key. Plugin data lets you store arbitrary\nstring values on individual nodes, scoped to your plugin.\n\n@param key - The plugin data key.\n@returns The stored value, or `null` if no data exists for the key.",
			references: [],
		},
		{
			name: "getPluginDataKeys",
			category: "TextNode",
			signature: "getPluginDataKeys(): Promise<string[]>",
			description:
				"Get all plugin data keys stored on this node.\n\n@returns An array of all plugin data keys.",
			references: [],
		},
		{
			name: "getRect",
			category: "TextNode",
			signature: "getRect(): Promise<Rect$1 | null>",
			description:
				"Get the bounding box of this node.\n\n@returns The bounding rectangle, or `null` if unavailable.",
			references: ["Rect$1"],
		},
		{
			name: "getText",
			category: "TextNode",
			signature: "getText(): Promise<string | null>",
			description: "Get the text of this node. Plain text content, not HTML.",
			references: [],
		},
		{
			name: "gridItemColumnSpan",
			category: "TextNode",
			signature: 'gridItemColumnSpan: WithGridItemTrait["gridItemColumnSpan"]',
			description:
				'Number of columns to span, or `"all"` for all columns. For nodes inside a grid container. Defaults to `1`. Supported by FrameNode, TextNode.',
			references: [],
		},
		{
			name: "gridItemFillCellHeight",
			category: "TextNode",
			signature:
				'gridItemFillCellHeight: WithGridItemTrait["gridItemFillCellHeight"]',
			description:
				"Whether to fill the grid cell height. For nodes inside a grid container. Defaults to `true`. Supported by FrameNode, TextNode.",
			references: [],
		},
		{
			name: "gridItemFillCellWidth",
			category: "TextNode",
			signature:
				'gridItemFillCellWidth: WithGridItemTrait["gridItemFillCellWidth"]',
			description:
				"Whether to fill the grid cell width. For nodes inside a grid container. Defaults to `true`. Supported by FrameNode, TextNode.",
			references: [],
		},
		{
			name: "gridItemHorizontalAlignment",
			category: "TextNode",
			signature:
				'gridItemHorizontalAlignment: WithGridItemTrait["gridItemHorizontalAlignment"]',
			description:
				'Horizontal alignment within grid cell. For nodes inside a grid container. Defaults to `"center"`. Supported by FrameNode, TextNode.',
			references: [],
		},
		{
			name: "gridItemRowSpan",
			category: "TextNode",
			signature: 'gridItemRowSpan: WithGridItemTrait["gridItemRowSpan"]',
			description:
				"Number of rows to span. For nodes inside a grid container. Defaults to `1`. Supported by FrameNode, TextNode.",
			references: [],
		},
		{
			name: "gridItemVerticalAlignment",
			category: "TextNode",
			signature:
				'gridItemVerticalAlignment: WithGridItemTrait["gridItemVerticalAlignment"]',
			description:
				'Vertical alignment within grid cell. For nodes inside a grid container. Defaults to `"center"`. Supported by FrameNode, TextNode.',
			references: [],
		},
		{
			name: "height",
			category: "TextNode",
			signature: "height: HeightLength | null",
			description:
				'Height of the node. Accepts pixel, percentage, fraction, viewport-height values, or `"fit-content"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["HeightLength"],
		},
		{
			name: "inlineTextStyle",
			category: "TextNode",
			signature: "inlineTextStyle: TextStyle | null",
			description:
				"Apply a text style preset. Setting to `null` removes the text style.\nSupported by TextNode.",
			references: ["TextStyle"],
		},
		{
			name: "left",
			category: "TextNode",
			signature: "left: CSSDimension<CSSUnit.Pixel> | null",
			description:
				'Distance from left edge when using absolute/fixed positioning.\nOnly applies when position is not `"relative"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Pixel"],
		},
		{
			name: "link",
			category: "TextNode",
			signature: "link: string | null",
			description:
				'URL or internal page link. External: `"https://example.com"`, internal: `"/about"`,\nemail: `"mailto:user@example.com"`. Setting to `null` removes the link.\nSupported by FrameNode, TextNode.',
			references: [],
		},
		{
			name: "linkOpenInNewTab",
			category: "TextNode",
			signature: "linkOpenInNewTab: boolean | null",
			description:
				"Whether to open the link in a new tab. Default is automatically determined based on link type.\nSupported by FrameNode, TextNode.",
			references: [],
		},
		{
			name: "locked",
			category: "TextNode",
			signature: "locked: boolean",
			description:
				"Whether the node is locked for editing. Defaults to `false`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.",
			references: [],
		},
		{
			name: "maxHeight",
			category: "TextNode",
			signature: "maxHeight: HeightConstraint | null",
			description:
				"Maximum height constraint. Supported by FrameNode, TextNode, ComponentInstanceNode.",
			references: ["HeightConstraint"],
		},
		{
			name: "maxWidth",
			category: "TextNode",
			signature: "maxWidth: WidthConstraint | null",
			description:
				"Maximum width constraint. Supported by FrameNode, TextNode, ComponentInstanceNode.",
			references: ["WidthConstraint"],
		},
		{
			name: "minHeight",
			category: "TextNode",
			signature: "minHeight: HeightConstraint | null",
			description:
				"Minimum height constraint. Supported by FrameNode, TextNode, ComponentInstanceNode.",
			references: ["HeightConstraint"],
		},
		{
			name: "minWidth",
			category: "TextNode",
			signature: "minWidth: WidthConstraint | null",
			description:
				"Minimum width constraint. Supported by FrameNode, TextNode, ComponentInstanceNode.",
			references: ["WidthConstraint"],
		},
		{
			name: "name",
			category: "TextNode",
			signature: "name: string | null",
			description:
				"The name of the node displayed in the layers panel.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode,\nComponentNode, VectorSetNode, VectorSetItemNode.",
			references: [],
		},
		{
			name: "navigateTo",
			category: "TextNode",
			signature:
				'navigateTo(opts?: Pick<NavigableOptions, "select" | "zoomIntoView">): Promise<void>',
			description:
				"Navigate to this node. May switch modes to reveal the relevant view.",
			references: ["NavigableOptions"],
		},
		{
			name: "opacity",
			category: "TextNode",
			signature: "opacity: number",
			description:
				"Opacity of the node, from `0` (fully transparent) to `1` (fully opaque). Defaults to `1`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode.",
			references: [],
		},
		{
			name: "overflow",
			category: "TextNode",
			signature: 'overflow: WithOverflowTrait["overflow"]',
			description:
				"Controls how content that exceeds the element's box is handled.\nSetting to `null` removes the overflow property. Will overwrite `overflowX` or `overflowY`.\nSupported by FrameNode, TextNode.",
			references: [],
		},
		{
			name: "overflowX",
			category: "TextNode",
			signature: 'overflowX: WithOverflowTrait["overflowX"]',
			description:
				"Controls horizontal overflow behavior.\nSetting to `null` removes the overflow X property. Supported by FrameNode, TextNode.",
			references: [],
		},
		{
			name: "overflowY",
			category: "TextNode",
			signature: 'overflowY: WithOverflowTrait["overflowY"]',
			description:
				"Controls vertical overflow behavior.\nSetting to `null` removes the overflow Y property. Supported by FrameNode, TextNode.",
			references: [],
		},
		{
			name: "position",
			category: "TextNode",
			signature: "position: Position",
			description:
				'Positioning behavior of the node.\n- `"relative"`: Default for nodes in stack/grid layouts\n- `"absolute"`: Positioned relative to parent\n- `"fixed"`: Positioned relative to viewport\n- `"sticky"`: Sticks to viewport edges when scrolling\n\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode.',
			references: ["Position"],
		},
		{
			name: "remove",
			category: "TextNode",
			signature: "remove(): Promise<void>",
			description:
				'Remove this node from the canvas tree.\n\nUse `"Node.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "right",
			category: "TextNode",
			signature: "right: CSSDimension<CSSUnit.Pixel> | null",
			description:
				'Distance from right edge when using absolute/fixed positioning.\nOnly applies when position is not `"relative"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Pixel"],
		},
		{
			name: "rotation",
			category: "TextNode",
			signature: "rotation: number",
			description:
				"Rotation angle in degrees. Defaults to `0`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode.",
			references: [],
		},
		{
			name: "select",
			category: "TextNode",
			signature: "select(): Promise<void>",
			description: "Select this node on the canvas.",
			references: [],
		},
		{
			name: "setAttributes",
			category: "TextNode",
			signature:
				'setAttributes(update: Partial<NodeClassToEditableAttributes[(typeof this)[ClassKey]]>): Promise<(typeof this)[ClassKey] extends "UnknownNode" ? never : typeof this | null>',
			description:
				'Set the attributes of this node. Attributes are merged with existing\nvalues, so only the provided attributes are updated.\n\n@param update - The attributes to update.\n@returns The updated node, or `null` if the node was not found.\n@throws If the node is an `UnknownNode`.\n\nUse `"Node.setAttributes"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setHTML",
			category: "TextNode",
			signature: "setHTML(html: string): Promise<void>",
			description:
				"Set the HTML of this node\n\n@alpha This an early API, and maybe heavily refactored in the future.",
			references: [],
		},
		{
			name: "setPluginData",
			category: "TextNode",
			signature:
				"setPluginData(key: string, value: string | null): Promise<void>",
			description:
				'Set plugin data by key. Plugin data lets you store arbitrary\nstring values on individual nodes, scoped to your plugin.\n\n@param key - The plugin data key.\n@param value - The value to set, or `null` to remove.\n\nUse `"Node.setPluginData"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setText",
			category: "TextNode",
			signature: "setText(text: string): Promise<void>",
			description:
				'Set the text of this node. Plain text content, not HTML.\n\nUse `"TextNode.setText"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "textTruncation",
			category: "TextNode",
			signature: 'textTruncation: WithTextTruncationTrait["textTruncation"]',
			description:
				"Maximum number of lines a text node can display before being truncated with an ellipsis.\nMust be used alongside `overflow`. Setting to `null` removes the text truncation property.\nSupported by TextNode.",
			references: [],
		},
		{
			name: "top",
			category: "TextNode",
			signature: "top: CSSDimension<CSSUnit.Pixel> | null",
			description:
				'Distance from top edge when using absolute/fixed positioning.\nOnly applies when position is not `"relative"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Pixel"],
		},
		{
			name: "visible",
			category: "TextNode",
			signature: "visible: boolean",
			description:
				"Whether the node is visible on the canvas. Defaults to `true`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.",
			references: [],
		},
		{
			name: "walk",
			category: "TextNode",
			signature: "walk(this: AnyNode): AsyncGenerator<AnyNode>",
			description:
				"Walk this node and its descendants recursively using an async\ngenerator. Yields nodes depth-first.",
			references: ["AnyNode"],
		},
		{
			name: "width",
			category: "TextNode",
			signature: "width: WidthLength | null",
			description:
				'Width of the node. Accepts pixel, percentage, fraction values, or `"fit-content"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["WidthLength"],
		},
		{
			name: "zIndex",
			category: "TextNode",
			signature: 'zIndex: WithZIndexTrait["zIndex"]',
			description:
				"Stacking order of positioned elements. Higher values appear on top of lower values.\nSetting to `null` removes the z-index property. Supported by FrameNode, TextNode.",
			references: [],
		},
		{
			name: "zoomIntoView",
			category: "TextNode",
			signature: "zoomIntoView(options?: ZoomIntoViewOptions): Promise<void>",
			description:
				"Pans and zooms the viewport to center the node.\n\n@param options - Options like `maxZoom` and `skipIfVisible`.",
			references: ["ZoomIntoViewOptions"],
		},
	],
	textstyle: [
		{
			name: "alignment",
			category: "TextStyle",
			signature: "alignment: TextAlignment",
			description:
				"Specifies the horizontal direction of the text for all breakpoints.",
			references: ["TextAlignment"],
		},
		{
			name: "balance",
			category: "TextStyle",
			signature: "balance: boolean",
			description:
				"When enabled, use a text wrap method that tries to balance the number of characters on each line for legibility.",
			references: [],
		},
		{
			name: "boldFont",
			category: "TextStyle",
			signature: "boldFont: Font | null",
			description:
				"Font to use for bold text.\n\nNote: This must have the same family name as the base `font` attribute.",
			references: ["Font"],
		},
		{
			name: "boldItalicFont",
			category: "TextStyle",
			signature: "boldItalicFont: Font | null",
			description:
				"Font to use for bold italic text.\n\nNote: This must have the same family name as the base `font` attribute.",
			references: ["Font"],
		},
		{
			name: "breakpoints",
			category: "TextStyle",
			signature: "breakpoints: TextStyleBreakpoint[]",
			description:
				"A list of style overrides that take affect at specific window widths. Breakpoints are automatically sorted by `minWidth` from largest to smallest.",
			references: ["TextStyleBreakpoint"],
		},
		{
			name: "color",
			category: "TextStyle",
			signature: "color: ColorStyle | string",
			description:
				"Color of the text in RGBA format for all breakpoints, e.g `rgba(242, 59, 57, 1)`",
			references: ["ColorStyle"],
		},
		{
			name: "decoration",
			category: "TextStyle",
			signature: "decoration: TextDecoration",
			description:
				"Appearance of any decorative lines on the text for all breakpoints.",
			references: ["TextDecoration"],
		},
		{
			name: "decorationColor",
			category: "TextStyle",
			signature: "decorationColor: ColorStyle | string",
			description:
				"Color of the text decoration in RGBA format for all breakpoints, e.g `rgba(242, 59, 57, 1)`",
			references: ["ColorStyle"],
		},
		{
			name: "decorationOffset",
			category: "TextStyle",
			signature:
				'decorationOffset: "auto" | CSSDimension<CSSUnit.Pixel | CSSUnit.Em>',
			description: "Offset of the text decoration for all breakpoints.",
			references: ["CSSDimension", "CSSUnit.Pixel", "CSSUnit.Em"],
		},
		{
			name: "decorationSkipInk",
			category: "TextStyle",
			signature: "decorationSkipInk: TextDecorationSkipInk",
			description:
				"Whether to skip ink when drawing the text decoration for all breakpoints.",
			references: ["TextDecorationSkipInk"],
		},
		{
			name: "decorationStyle",
			category: "TextStyle",
			signature: "decorationStyle: TextDecorationStyle",
			description: "Style of the text decoration for all breakpoints.",
			references: ["TextDecorationStyle"],
		},
		{
			name: "decorationThickness",
			category: "TextStyle",
			signature:
				'decorationThickness: "auto" | CSSDimension<CSSUnit.Pixel | CSSUnit.Em>',
			description: "Thickness of the text decoration for all breakpoints.",
			references: ["CSSDimension", "CSSUnit.Pixel", "CSSUnit.Em"],
		},
		{
			name: "font",
			category: "TextStyle",
			signature: "font: Font",
			description:
				"Base font of the text.\n\nSetting this will automatically update `boldFont`, `italicFont` or\n`boldItalicFont` with the appropriate variants if they are not already\nspecified.",
			references: ["Font"],
		},
		{
			name: "fontSize",
			category: "TextStyle",
			signature: "fontSize: CSSDimension<CSSUnit.Pixel | CSSUnit.Rem>",
			description:
				"Size of the text of the primary breakpoint.\n\nNote: This is used by default when there are no breakpoints.",
			references: ["CSSDimension", "CSSUnit.Pixel", "CSSUnit.Rem"],
		},
		{
			name: "getPluginData",
			category: "TextStyle",
			signature: "getPluginData(key: string): Promise<string | null>",
			description:
				"Get plugin data for this text style by key.\n\n@param key - The plugin data key.\n@returns The stored value, or `null` if no data exists for the key.",
			references: [],
		},
		{
			name: "getPluginDataKeys",
			category: "TextStyle",
			signature: "getPluginDataKeys(): Promise<string[]>",
			description:
				"Get all plugin data keys for this text style.\n\n@returns An array of all plugin data keys set on this text style.",
			references: [],
		},
		{
			name: "italicFont",
			category: "TextStyle",
			signature: "italicFont: Font | null",
			description:
				"Font to use for italic text.\n\nNote: This must be the same family name as the base `font` attribute.",
			references: ["Font"],
		},
		{
			name: "letterSpacing",
			category: "TextStyle",
			signature: "letterSpacing: CSSDimension<CSSUnit.Pixel | CSSUnit.Em>",
			description:
				"Size of the space between each letter for the primary breakpoint.\n\nNote: This is used by default when there are no breakpoints.",
			references: ["CSSDimension", "CSSUnit.Pixel", "CSSUnit.Em"],
		},
		{
			name: "lineHeight",
			category: "TextStyle",
			signature:
				"lineHeight: CSSDimension<CSSUnit.Pixel | CSSUnit.Em | CSSUnit.Percentage>",
			description:
				"Size of the space between each line of text for the primary breakpoint.\n\nNote: This is used by default when there are no breakpoints.",
			references: [
				"CSSDimension",
				"CSSUnit.Pixel",
				"CSSUnit.Em",
				"CSSUnit.Percentage",
			],
		},
		{
			name: "minWidth",
			category: "TextStyle",
			signature: "minWidth: number",
			description:
				"How big does the window width need to be for primary breakpoint styles to\ntake affect.\n\nNote: This is ignored if the text style has no breakpoints.",
			references: [],
		},
		{
			name: "paragraphSpacing",
			category: "TextStyle",
			signature: "paragraphSpacing: number",
			description:
				"Size of the space between each paragraph for the primary breakpoint.\n\nNote: This is used by default when there are no breakpoints.",
			references: [],
		},
		{
			name: "path",
			category: "TextStyle",
			signature: "path: string",
			description:
				"Hierarchical path to the text style in the assets folder structure, e.g. `ui/modals/text`.\nUsed for organizing text styles in the UI and for programmatic access.\nSegments are separated by forward slashes.",
			references: [],
		},
		{
			name: "remove",
			category: "TextStyle",
			signature: "remove(): Promise<void>",
			description:
				'Deletes the text style from the project. You need a reference to\nthe style to call this method.\n\nUse `"TextStyle.remove"` to check if this method is allowed.\n\n@example\n```ts\nawait textStyle.remove()\n```',
			references: [],
		},
		{
			name: "setAttributes",
			category: "TextStyle",
			signature:
				"setAttributes(attributes: TextStyleAttributes): Promise<TextStyle | null>",
			description:
				'Set the attributes of the text style. All attributes except\n`breakpoints` are merged with existing values. When setting\n`breakpoints`, the provided array replaces any existing breakpoints\nentirely. To update breakpoints without overriding them all, iterate\nover the existing breakpoints and merge them.\n\n@param attributes - The attributes to update.\n@returns The updated text style, or `null` if the style was not found.\n@throws If the number of breakpoints is bigger than the limit of 4.\n@throws If any of the font families used for `boldFont`, `italicFont` and\n`boldItalicFont` do not match the family of `font`.\n\nUse `"TextStyle.setAttributes"` to check if this method is allowed.\n\n@example\n```ts\n// Update the color of a text style.\nconst textStyle = await framer.getTextStyle("text-style-id")\nif (textStyle) {\n  await textStyle.setAttributes({\n    color: "rgba(242, 59, 57, 1)"\n  })\n}\n\n// Replace breakpoints on a text style.\nawait textStyle.setAttributes({\n  breakpoints: [\n    { minWidth: 320, fontSize: "24px" }\n  ]\n})\n\n// Scale font sizes across all breakpoints without losing them.\nawait textStyle.setAttributes({\n  fontSize: parseInt(textStyle.fontSize) * 0.8 + "px",\n  breakpoints: textStyle.breakpoints.map((bp) => ({\n    ...bp,\n    fontSize: parseInt(bp.fontSize) * 0.8 + "px"\n  }))\n})\n```',
			references: ["TextStyleAttributes", "TextStyle"],
		},
		{
			name: "setPluginData",
			category: "TextStyle",
			signature:
				"setPluginData(key: string, value: string | null): Promise<void>",
			description:
				'Set plugin data on this text style by key.\n\n@param key - The plugin data key.\n@param value - The value to set, or `null` to remove.\n\nUse `"TextStyle.setPluginData"` to check if this method is allowed.\n\n@example\n```ts\nawait textStyle.setPluginData("key", "value")\n```',
			references: [],
		},
		{
			name: "tag",
			category: "TextStyle",
			signature: "tag: TextStyleTag",
			description: "HTML tag that the style will use.",
			references: ["TextStyleTag"],
		},
		{
			name: "transform",
			category: "TextStyle",
			signature: "transform: TextTransform",
			description: "Specifies how to capitalize the text for all breakpoints.",
			references: ["TextTransform"],
		},
	],
	unknownnode: [
		{
			name: "clone",
			category: "UnknownNode",
			signature:
				'clone(): Promise<(typeof this)[ClassKey] extends "UnknownNode" ? never : typeof this | null>',
			description:
				'Clone this node, creating a duplicate in the canvas tree.\n\n@returns The cloned node, or `null` if the clone failed.\n@throws If the node is an `UnknownNode`.\n\nUse `"Node.clone"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "getChildren",
			category: "UnknownNode",
			signature: "getChildren(): Promise<CanvasNode[]>",
			description:
				"Get the children of this node in the canvas tree.\n\n@returns An array of child nodes. Returns an empty array for `UnknownNode`.",
			references: ["CanvasNode"],
		},
		{
			name: "getNodesWithAttribute",
			category: "UnknownNode",
			signature: "getNodesWithAttribute(attribute: T): Promise<Node[]>",
			description:
				'Get the descendants of this node that support `attribute`. This\nreturns nodes that have the given attribute defined in their type,\nregardless of whether it has been set.\n\n@param attribute - The attribute name to filter by.\n@returns An array of nodes that support the attribute.\n\n@example\n```ts\n// Get any kind of node that has a background color attribute.\nconst nodes = await framer.getNodesWithAttribute("backgroundColor")\n```',
			references: ["T", "Node"],
		},
		{
			name: "getNodesWithAttributeSet",
			category: "UnknownNode",
			signature: "getNodesWithAttributeSet(attribute: T): Promise<Node[]>",
			description:
				'Get the descendants of this node that have `attribute` set to a\nnon-null value.\n\n@param attribute - The attribute name to filter by.\n@returns An array of nodes that have the attribute set.\n\n@example\n```ts\n// Get all nodes with a background image set.\nconst nodes = await framer.getNodesWithAttributeSet("backgroundImage")\n```',
			references: ["T", "Node"],
		},
		{
			name: "getNodesWithType",
			category: "UnknownNode",
			signature: 'getNodesWithType(type: "FrameNode"): Promise<FrameNode[]>',
			description:
				'Get descendants of this node that match the given type. This can\nalso be used to query within a selection subtree.\n\n@param type - The node type to search for.\n@returns An array of matching descendant nodes.\n\n@example\n```ts\n// Get all frame nodes in a project.\nconst frameNodes = await framer.getNodesWithType("FrameNode")\n\n// Query within a selection subtree.\nconst selection = await framer.getSelection()\nif (selection.length === 1) {\n  const frameNodes = await selection[0].getNodesWithType("FrameNode")\n}\n```',
			references: ["FrameNode"],
		},
		{
			name: "getParent",
			category: "UnknownNode",
			signature: "getParent(): Promise<AnyNode | null>",
			description:
				"Get the parent of this node in the canvas tree.\n\n@returns The parent node, or `null` if this is a root node.",
			references: ["AnyNode"],
		},
		{
			name: "getPluginData",
			category: "UnknownNode",
			signature: "getPluginData(key: string): Promise<string | null>",
			description:
				"Get plugin data by key. Plugin data lets you store arbitrary\nstring values on individual nodes, scoped to your plugin.\n\n@param key - The plugin data key.\n@returns The stored value, or `null` if no data exists for the key.",
			references: [],
		},
		{
			name: "getPluginDataKeys",
			category: "UnknownNode",
			signature: "getPluginDataKeys(): Promise<string[]>",
			description:
				"Get all plugin data keys stored on this node.\n\n@returns An array of all plugin data keys.",
			references: [],
		},
		{
			name: "getRect",
			category: "UnknownNode",
			signature: "getRect(): Promise<Rect$1 | null>",
			description:
				"Get the bounding box of this node.\n\n@returns The bounding rectangle, or `null` if unavailable.",
			references: ["Rect$1"],
		},
		{
			name: "navigateTo",
			category: "UnknownNode",
			signature:
				'navigateTo(opts?: Pick<NavigableOptions, "select" | "zoomIntoView">): Promise<void>',
			description:
				"Navigate to this node. May switch modes to reveal the relevant view.",
			references: ["NavigableOptions"],
		},
		{
			name: "remove",
			category: "UnknownNode",
			signature: "remove(): Promise<void>",
			description:
				'Remove this node from the canvas tree.\n\nUse `"Node.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "select",
			category: "UnknownNode",
			signature: "select(): Promise<void>",
			description: "Select this node on the canvas.",
			references: [],
		},
		{
			name: "setAttributes",
			category: "UnknownNode",
			signature:
				'setAttributes(update: Partial<NodeClassToEditableAttributes[(typeof this)[ClassKey]]>): Promise<(typeof this)[ClassKey] extends "UnknownNode" ? never : typeof this | null>',
			description:
				'Set the attributes of this node. Attributes are merged with existing\nvalues, so only the provided attributes are updated.\n\n@param update - The attributes to update.\n@returns The updated node, or `null` if the node was not found.\n@throws If the node is an `UnknownNode`.\n\nUse `"Node.setAttributes"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setPluginData",
			category: "UnknownNode",
			signature:
				"setPluginData(key: string, value: string | null): Promise<void>",
			description:
				'Set plugin data by key. Plugin data lets you store arbitrary\nstring values on individual nodes, scoped to your plugin.\n\n@param key - The plugin data key.\n@param value - The value to set, or `null` to remove.\n\nUse `"Node.setPluginData"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "walk",
			category: "UnknownNode",
			signature: "walk(this: AnyNode): AsyncGenerator<AnyNode>",
			description:
				"Walk this node and its descendants recursively using an async\ngenerator. Yields nodes depth-first.",
			references: ["AnyNode"],
		},
		{
			name: "zoomIntoView",
			category: "UnknownNode",
			signature: "zoomIntoView(options?: ZoomIntoViewOptions): Promise<void>",
			description:
				"Pans and zooms the viewport to center the node.\n\n@param options - Options like `maxZoom` and `skipIfVisible`.",
			references: ["ZoomIntoViewOptions"],
		},
	],
	unsupportedfield: [
		{
			name: "id",
			category: "UnsupportedField",
			signature: "id: string",
			description: "The unique identifier of the field.",
			references: [],
		},
		{
			name: "name",
			category: "UnsupportedField",
			signature: "name: string",
			description: "The display name of the field as shown in the UI.",
			references: [],
		},
		{
			name: "remove",
			category: "UnsupportedField",
			signature: "remove(): Promise<void>",
			description:
				'Remove this field.\n\nUse `"Field.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setAttributes",
			category: "UnsupportedField",
			signature:
				"setAttributes(attributes: UpdateFieldAttributes<typeof this>): Promise<typeof this | null>",
			description:
				'Use to rename any field:\n\n```ts\nconst updatedField = await field.setAttributes({ name: "New Name" })\n```\n\nAnd to set other attributes too, but make sure to narrow based on field\'s `type` first, as to\navoid potential bugs:\n\n```ts\nif (field.type === "file") await field.setAttributes({ allowedFileTypes: ["txt", "md"] })\n```\n\nReturns the updated field on success, and `null` in the unlikely event of it being removed\nbetween getting it and calling this method.\n\n@param attributes - The attributes to update.\n\nUse `"Field.setAttributes"` to check if this method is allowed.',
			references: ["UpdateFieldAttributes"],
		},
	],
	unsupportedvariable: [
		{
			name: "remove",
			category: "UnsupportedVariable",
			signature: "remove(): Promise<void>",
			description:
				'Remove this variable.\n\nUse `"Variable.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setAttributes",
			category: "UnsupportedVariable",
			signature:
				"setAttributes(attributes: UpdateVariableAttributes<typeof this>): Promise<typeof this | null>",
			description:
				'Use to rename or change the description of this variable:\n\n```ts\nconst updatedVariable = await variable.setAttributes({ name: "New Name" })\n```\n\nAnd to update other attributes too, but make sure to narrow using `instanceof` first, as to\navoid potential bugs:\n\n```ts\nif (variable instanceof FileVariable) await variable.setAttributes({ allowedFileTypes: ["txt", "md"] })\n```\n\nReturns the updated variable on success, and `null` in the unlikely event of it being removed\nbetween getting it and calling this method.\n\nUse `"Variable.setAttributes"` to check if this method is allowed.',
			references: ["UpdateVariableAttributes"],
		},
	],
	vectorset: [
		{
			name: "getItems",
			category: "VectorSet",
			signature: "getItems(): Promise<VectorSetItem[]>",
			description:
				"Get all vector items in this set.\n\n@returns An array of VectorSetItem instances.",
			references: ["VectorSetItem"],
		},
	],
	vectorsetitem: [
		{
			name: "getVariables",
			category: "VectorSetItem",
			signature: "getVariables(): Promise<VectorSetItemVariable[]>",
			description:
				"Get the customizable variables (e.g. color, stroke width) for this vector item.\n\n@returns An array of variable definitions.",
			references: ["VectorSetItemVariable"],
		},
	],
	vectorsetitemnode: [
		{
			name: "bottom",
			category: "VectorSetItemNode",
			signature: "bottom: CSSDimension<CSSUnit.Pixel> | null",
			description:
				'Distance from bottom edge when using absolute/fixed positioning.\nOnly applies when position is not `"relative"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Pixel"],
		},
		{
			name: "centerX",
			category: "VectorSetItemNode",
			signature: "centerX: CSSDimension<CSSUnit.Percentage> | null",
			description:
				'Center anchor horizontal position as percentage (e.g. `"50%"`).\nUsed when pins are not set.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Percentage"],
		},
		{
			name: "centerY",
			category: "VectorSetItemNode",
			signature: "centerY: CSSDimension<CSSUnit.Percentage> | null",
			description:
				'Center anchor vertical position as percentage (e.g. `"50%"`).\nUsed when pins are not set.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Percentage"],
		},
		{
			name: "clone",
			category: "VectorSetItemNode",
			signature:
				'clone(): Promise<(typeof this)[ClassKey] extends "UnknownNode" ? never : typeof this | null>',
			description:
				'Clone this node, creating a duplicate in the canvas tree.\n\n@returns The cloned node, or `null` if the clone failed.\n@throws If the node is an `UnknownNode`.\n\nUse `"Node.clone"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "getChildren",
			category: "VectorSetItemNode",
			signature: "getChildren(): Promise<CanvasNode[]>",
			description:
				"Get the children of this node in the canvas tree.\n\n@returns An array of child nodes. Returns an empty array for `UnknownNode`.",
			references: ["CanvasNode"],
		},
		{
			name: "getNodesWithAttribute",
			category: "VectorSetItemNode",
			signature: "getNodesWithAttribute(attribute: T): Promise<Node[]>",
			description:
				'Get the descendants of this node that support `attribute`. This\nreturns nodes that have the given attribute defined in their type,\nregardless of whether it has been set.\n\n@param attribute - The attribute name to filter by.\n@returns An array of nodes that support the attribute.\n\n@example\n```ts\n// Get any kind of node that has a background color attribute.\nconst nodes = await framer.getNodesWithAttribute("backgroundColor")\n```',
			references: ["T", "Node"],
		},
		{
			name: "getNodesWithAttributeSet",
			category: "VectorSetItemNode",
			signature: "getNodesWithAttributeSet(attribute: T): Promise<Node[]>",
			description:
				'Get the descendants of this node that have `attribute` set to a\nnon-null value.\n\n@param attribute - The attribute name to filter by.\n@returns An array of nodes that have the attribute set.\n\n@example\n```ts\n// Get all nodes with a background image set.\nconst nodes = await framer.getNodesWithAttributeSet("backgroundImage")\n```',
			references: ["T", "Node"],
		},
		{
			name: "getNodesWithType",
			category: "VectorSetItemNode",
			signature: 'getNodesWithType(type: "FrameNode"): Promise<FrameNode[]>',
			description:
				'Get descendants of this node that match the given type. This can\nalso be used to query within a selection subtree.\n\n@param type - The node type to search for.\n@returns An array of matching descendant nodes.\n\n@example\n```ts\n// Get all frame nodes in a project.\nconst frameNodes = await framer.getNodesWithType("FrameNode")\n\n// Query within a selection subtree.\nconst selection = await framer.getSelection()\nif (selection.length === 1) {\n  const frameNodes = await selection[0].getNodesWithType("FrameNode")\n}\n```',
			references: ["FrameNode"],
		},
		{
			name: "getParent",
			category: "VectorSetItemNode",
			signature: "getParent(): Promise<AnyNode | null>",
			description:
				"Get the parent of this node in the canvas tree.\n\n@returns The parent node, or `null` if this is a root node.",
			references: ["AnyNode"],
		},
		{
			name: "getPluginData",
			category: "VectorSetItemNode",
			signature: "getPluginData(key: string): Promise<string | null>",
			description:
				"Get plugin data by key. Plugin data lets you store arbitrary\nstring values on individual nodes, scoped to your plugin.\n\n@param key - The plugin data key.\n@returns The stored value, or `null` if no data exists for the key.",
			references: [],
		},
		{
			name: "getPluginDataKeys",
			category: "VectorSetItemNode",
			signature: "getPluginDataKeys(): Promise<string[]>",
			description:
				"Get all plugin data keys stored on this node.\n\n@returns An array of all plugin data keys.",
			references: [],
		},
		{
			name: "getRect",
			category: "VectorSetItemNode",
			signature: "getRect(): Promise<Rect$1 | null>",
			description:
				"Get the bounding box of this node.\n\n@returns The bounding rectangle, or `null` if unavailable.",
			references: ["Rect$1"],
		},
		{
			name: "height",
			category: "VectorSetItemNode",
			signature: "height: HeightLength | null",
			description:
				'Height of the node. Accepts pixel, percentage, fraction, viewport-height values, or `"fit-content"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["HeightLength"],
		},
		{
			name: "left",
			category: "VectorSetItemNode",
			signature: "left: CSSDimension<CSSUnit.Pixel> | null",
			description:
				'Distance from left edge when using absolute/fixed positioning.\nOnly applies when position is not `"relative"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Pixel"],
		},
		{
			name: "locked",
			category: "VectorSetItemNode",
			signature: "locked: boolean",
			description:
				"Whether the node is locked for editing. Defaults to `false`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.",
			references: [],
		},
		{
			name: "name",
			category: "VectorSetItemNode",
			signature: "name: string | null",
			description:
				"The name of the node displayed in the layers panel.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode,\nComponentNode, VectorSetNode, VectorSetItemNode.",
			references: [],
		},
		{
			name: "navigateTo",
			category: "VectorSetItemNode",
			signature:
				'navigateTo(opts?: Pick<NavigableOptions, "select" | "zoomIntoView">): Promise<void>',
			description:
				"Navigate to this node. May switch modes to reveal the relevant view.",
			references: ["NavigableOptions"],
		},
		{
			name: "remove",
			category: "VectorSetItemNode",
			signature: "remove(): Promise<void>",
			description:
				'Remove this node from the canvas tree.\n\nUse `"Node.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "right",
			category: "VectorSetItemNode",
			signature: "right: CSSDimension<CSSUnit.Pixel> | null",
			description:
				'Distance from right edge when using absolute/fixed positioning.\nOnly applies when position is not `"relative"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Pixel"],
		},
		{
			name: "select",
			category: "VectorSetItemNode",
			signature: "select(): Promise<void>",
			description: "Select this node on the canvas.",
			references: [],
		},
		{
			name: "setAttributes",
			category: "VectorSetItemNode",
			signature:
				'setAttributes(update: Partial<NodeClassToEditableAttributes[(typeof this)[ClassKey]]>): Promise<(typeof this)[ClassKey] extends "UnknownNode" ? never : typeof this | null>',
			description:
				'Set the attributes of this node. Attributes are merged with existing\nvalues, so only the provided attributes are updated.\n\n@param update - The attributes to update.\n@returns The updated node, or `null` if the node was not found.\n@throws If the node is an `UnknownNode`.\n\nUse `"Node.setAttributes"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setPluginData",
			category: "VectorSetItemNode",
			signature:
				"setPluginData(key: string, value: string | null): Promise<void>",
			description:
				'Set plugin data by key. Plugin data lets you store arbitrary\nstring values on individual nodes, scoped to your plugin.\n\n@param key - The plugin data key.\n@param value - The value to set, or `null` to remove.\n\nUse `"Node.setPluginData"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "top",
			category: "VectorSetItemNode",
			signature: "top: CSSDimension<CSSUnit.Pixel> | null",
			description:
				'Distance from top edge when using absolute/fixed positioning.\nOnly applies when position is not `"relative"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["CSSDimension", "CSSUnit.Pixel"],
		},
		{
			name: "visible",
			category: "VectorSetItemNode",
			signature: "visible: boolean",
			description:
				"Whether the node is visible on the canvas. Defaults to `true`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.",
			references: [],
		},
		{
			name: "walk",
			category: "VectorSetItemNode",
			signature: "walk(this: AnyNode): AsyncGenerator<AnyNode>",
			description:
				"Walk this node and its descendants recursively using an async\ngenerator. Yields nodes depth-first.",
			references: ["AnyNode"],
		},
		{
			name: "width",
			category: "VectorSetItemNode",
			signature: "width: WidthLength | null",
			description:
				'Width of the node. Accepts pixel, percentage, fraction values, or `"fit-content"`.\nSupported by FrameNode, TextNode, SVGNode, ComponentInstanceNode, VectorSetItemNode.',
			references: ["WidthLength"],
		},
		{
			name: "zoomIntoView",
			category: "VectorSetItemNode",
			signature: "zoomIntoView(options?: ZoomIntoViewOptions): Promise<void>",
			description:
				"Pans and zooms the viewport to center the node.\n\n@param options - Options like `maxZoom` and `skipIfVisible`.",
			references: ["ZoomIntoViewOptions"],
		},
	],
	vectorsetnode: [
		{
			name: "clone",
			category: "VectorSetNode",
			signature:
				'clone(): Promise<(typeof this)[ClassKey] extends "UnknownNode" ? never : typeof this | null>',
			description:
				'Clone this node, creating a duplicate in the canvas tree.\n\n@returns The cloned node, or `null` if the clone failed.\n@throws If the node is an `UnknownNode`.\n\nUse `"Node.clone"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "getChildren",
			category: "VectorSetNode",
			signature: "getChildren(): Promise<CanvasNode[]>",
			description:
				"Get the children of this node in the canvas tree.\n\n@returns An array of child nodes. Returns an empty array for `UnknownNode`.",
			references: ["CanvasNode"],
		},
		{
			name: "getNodesWithAttribute",
			category: "VectorSetNode",
			signature: "getNodesWithAttribute(attribute: T): Promise<Node[]>",
			description:
				'Get the descendants of this node that support `attribute`. This\nreturns nodes that have the given attribute defined in their type,\nregardless of whether it has been set.\n\n@param attribute - The attribute name to filter by.\n@returns An array of nodes that support the attribute.\n\n@example\n```ts\n// Get any kind of node that has a background color attribute.\nconst nodes = await framer.getNodesWithAttribute("backgroundColor")\n```',
			references: ["T", "Node"],
		},
		{
			name: "getNodesWithAttributeSet",
			category: "VectorSetNode",
			signature: "getNodesWithAttributeSet(attribute: T): Promise<Node[]>",
			description:
				'Get the descendants of this node that have `attribute` set to a\nnon-null value.\n\n@param attribute - The attribute name to filter by.\n@returns An array of nodes that have the attribute set.\n\n@example\n```ts\n// Get all nodes with a background image set.\nconst nodes = await framer.getNodesWithAttributeSet("backgroundImage")\n```',
			references: ["T", "Node"],
		},
		{
			name: "getNodesWithType",
			category: "VectorSetNode",
			signature: 'getNodesWithType(type: "FrameNode"): Promise<FrameNode[]>',
			description:
				'Get descendants of this node that match the given type. This can\nalso be used to query within a selection subtree.\n\n@param type - The node type to search for.\n@returns An array of matching descendant nodes.\n\n@example\n```ts\n// Get all frame nodes in a project.\nconst frameNodes = await framer.getNodesWithType("FrameNode")\n\n// Query within a selection subtree.\nconst selection = await framer.getSelection()\nif (selection.length === 1) {\n  const frameNodes = await selection[0].getNodesWithType("FrameNode")\n}\n```',
			references: ["FrameNode"],
		},
		{
			name: "getParent",
			category: "VectorSetNode",
			signature: "getParent(): Promise<AnyNode | null>",
			description:
				"Get the parent of this node in the canvas tree.\n\n@returns The parent node, or `null` if this is a root node.",
			references: ["AnyNode"],
		},
		{
			name: "getPluginData",
			category: "VectorSetNode",
			signature: "getPluginData(key: string): Promise<string | null>",
			description:
				"Get plugin data by key. Plugin data lets you store arbitrary\nstring values on individual nodes, scoped to your plugin.\n\n@param key - The plugin data key.\n@returns The stored value, or `null` if no data exists for the key.",
			references: [],
		},
		{
			name: "getPluginDataKeys",
			category: "VectorSetNode",
			signature: "getPluginDataKeys(): Promise<string[]>",
			description:
				"Get all plugin data keys stored on this node.\n\n@returns An array of all plugin data keys.",
			references: [],
		},
		{
			name: "getRect",
			category: "VectorSetNode",
			signature: "getRect(): Promise<Rect$1 | null>",
			description:
				"Get the bounding box of this node.\n\n@returns The bounding rectangle, or `null` if unavailable.",
			references: ["Rect$1"],
		},
		{
			name: "navigateTo",
			category: "VectorSetNode",
			signature:
				'navigateTo(opts?: Pick<NavigableOptions, "select" | "zoomIntoView">): Promise<void>',
			description:
				"Navigate to this node. May switch modes to reveal the relevant view.",
			references: ["NavigableOptions"],
		},
		{
			name: "remove",
			category: "VectorSetNode",
			signature: "remove(): Promise<void>",
			description:
				'Remove this node from the canvas tree.\n\nUse `"Node.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "select",
			category: "VectorSetNode",
			signature: "select(): Promise<void>",
			description: "Select this node on the canvas.",
			references: [],
		},
		{
			name: "setAttributes",
			category: "VectorSetNode",
			signature:
				'setAttributes(update: Partial<NodeClassToEditableAttributes[(typeof this)[ClassKey]]>): Promise<(typeof this)[ClassKey] extends "UnknownNode" ? never : typeof this | null>',
			description:
				'Set the attributes of this node. Attributes are merged with existing\nvalues, so only the provided attributes are updated.\n\n@param update - The attributes to update.\n@returns The updated node, or `null` if the node was not found.\n@throws If the node is an `UnknownNode`.\n\nUse `"Node.setAttributes"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setPluginData",
			category: "VectorSetNode",
			signature:
				"setPluginData(key: string, value: string | null): Promise<void>",
			description:
				'Set plugin data by key. Plugin data lets you store arbitrary\nstring values on individual nodes, scoped to your plugin.\n\n@param key - The plugin data key.\n@param value - The value to set, or `null` to remove.\n\nUse `"Node.setPluginData"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "walk",
			category: "VectorSetNode",
			signature: "walk(this: AnyNode): AsyncGenerator<AnyNode>",
			description:
				"Walk this node and its descendants recursively using an async\ngenerator. Yields nodes depth-first.",
			references: ["AnyNode"],
		},
		{
			name: "zoomIntoView",
			category: "VectorSetNode",
			signature: "zoomIntoView(options?: ZoomIntoViewOptions): Promise<void>",
			description:
				"Pans and zooms the viewport to center the node.\n\n@param options - Options like `maxZoom` and `skipIfVisible`.",
			references: ["ZoomIntoViewOptions"],
		},
	],
	webpagenode: [
		{
			name: "addBreakpoint",
			category: "WebPageNode",
			signature:
				"addBreakpoint(basedOn: NodeId, breakpoint: Breakpoint): Promise<FrameNode>",
			description:
				"Adds a new breakpoint to the web page.\n@param breakpoint The breakpoint configuration to add\n@returns a new FrameNode\n\n@alpha",
			references: ["Breakpoint", "FrameNode"],
		},
		{
			name: "clone",
			category: "WebPageNode",
			signature:
				'clone(): Promise<(typeof this)[ClassKey] extends "UnknownNode" ? never : typeof this | null>',
			description:
				'Clone this node, creating a duplicate in the canvas tree.\n\n@returns The cloned node, or `null` if the clone failed.\n@throws If the node is an `UnknownNode`.\n\nUse `"Node.clone"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "collectionId",
			category: "WebPageNode",
			signature: "collectionId: string | null",
			description:
				"The Collection ID of the CMS Collection if the WebPage is a CMS Detail Page",
			references: [],
		},
		{
			name: "getActiveCollectionItem",
			category: "WebPageNode",
			signature: "getActiveCollectionItem(): Promise<CollectionItem | null>",
			description:
				"Get the active collection item for this CMS detail page.\nReturns null if this is not a detail page or the collection is empty.\n\n@alpha",
			references: ["CollectionItem"],
		},
		{
			name: "getBreakpointSuggestions",
			category: "WebPageNode",
			signature: "getBreakpointSuggestions(): Promise<readonly Breakpoint[]>",
			description:
				"Get a list of breakpoints suggestions that can be added to the WebPage.\n\n@alpha",
			references: ["Breakpoint"],
		},
		{
			name: "getChildren",
			category: "WebPageNode",
			signature: "getChildren(): Promise<CanvasNode[]>",
			description:
				"Get the children of this node in the canvas tree.\n\n@returns An array of child nodes. Returns an empty array for `UnknownNode`.",
			references: ["CanvasNode"],
		},
		{
			name: "getNodesWithAttribute",
			category: "WebPageNode",
			signature: "getNodesWithAttribute(attribute: T): Promise<Node[]>",
			description:
				'Get the descendants of this node that support `attribute`. This\nreturns nodes that have the given attribute defined in their type,\nregardless of whether it has been set.\n\n@param attribute - The attribute name to filter by.\n@returns An array of nodes that support the attribute.\n\n@example\n```ts\n// Get any kind of node that has a background color attribute.\nconst nodes = await framer.getNodesWithAttribute("backgroundColor")\n```',
			references: ["T", "Node"],
		},
		{
			name: "getNodesWithAttributeSet",
			category: "WebPageNode",
			signature: "getNodesWithAttributeSet(attribute: T): Promise<Node[]>",
			description:
				'Get the descendants of this node that have `attribute` set to a\nnon-null value.\n\n@param attribute - The attribute name to filter by.\n@returns An array of nodes that have the attribute set.\n\n@example\n```ts\n// Get all nodes with a background image set.\nconst nodes = await framer.getNodesWithAttributeSet("backgroundImage")\n```',
			references: ["T", "Node"],
		},
		{
			name: "getNodesWithType",
			category: "WebPageNode",
			signature: 'getNodesWithType(type: "FrameNode"): Promise<FrameNode[]>',
			description:
				'Get descendants of this node that match the given type. This can\nalso be used to query within a selection subtree.\n\n@param type - The node type to search for.\n@returns An array of matching descendant nodes.\n\n@example\n```ts\n// Get all frame nodes in a project.\nconst frameNodes = await framer.getNodesWithType("FrameNode")\n\n// Query within a selection subtree.\nconst selection = await framer.getSelection()\nif (selection.length === 1) {\n  const frameNodes = await selection[0].getNodesWithType("FrameNode")\n}\n```',
			references: ["FrameNode"],
		},
		{
			name: "getParent",
			category: "WebPageNode",
			signature: "getParent(): Promise<AnyNode | null>",
			description:
				"Get the parent of this node in the canvas tree.\n\n@returns The parent node, or `null` if this is a root node.",
			references: ["AnyNode"],
		},
		{
			name: "getPluginData",
			category: "WebPageNode",
			signature: "getPluginData(key: string): Promise<string | null>",
			description:
				"Get plugin data by key. Plugin data lets you store arbitrary\nstring values on individual nodes, scoped to your plugin.\n\n@param key - The plugin data key.\n@returns The stored value, or `null` if no data exists for the key.",
			references: [],
		},
		{
			name: "getPluginDataKeys",
			category: "WebPageNode",
			signature: "getPluginDataKeys(): Promise<string[]>",
			description:
				"Get all plugin data keys stored on this node.\n\n@returns An array of all plugin data keys.",
			references: [],
		},
		{
			name: "getRect",
			category: "WebPageNode",
			signature: "getRect(): Promise<Rect$1 | null>",
			description:
				"Get the bounding box of this node.\n\n@returns The bounding rectangle, or `null` if unavailable.",
			references: ["Rect$1"],
		},
		{
			name: "navigateTo",
			category: "WebPageNode",
			signature:
				'navigateTo(opts?: Pick<NavigableOptions, "select" | "zoomIntoView">): Promise<void>',
			description:
				"Navigate to this node. May switch modes to reveal the relevant view.",
			references: ["NavigableOptions"],
		},
		{
			name: "path",
			category: "WebPageNode",
			signature: "path: string | null",
			description: "The relative path to the WebPage",
			references: [],
		},
		{
			name: "remove",
			category: "WebPageNode",
			signature: "remove(): Promise<void>",
			description:
				'Remove this node from the canvas tree.\n\nUse `"Node.remove"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "select",
			category: "WebPageNode",
			signature: "select(): Promise<void>",
			description: "Select this node on the canvas.",
			references: [],
		},
		{
			name: "setAttributes",
			category: "WebPageNode",
			signature:
				'setAttributes(update: Partial<NodeClassToEditableAttributes[(typeof this)[ClassKey]]>): Promise<(typeof this)[ClassKey] extends "UnknownNode" ? never : typeof this | null>',
			description:
				'Set the attributes of this node. Attributes are merged with existing\nvalues, so only the provided attributes are updated.\n\n@param update - The attributes to update.\n@returns The updated node, or `null` if the node was not found.\n@throws If the node is an `UnknownNode`.\n\nUse `"Node.setAttributes"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "setPluginData",
			category: "WebPageNode",
			signature:
				"setPluginData(key: string, value: string | null): Promise<void>",
			description:
				'Set plugin data by key. Plugin data lets you store arbitrary\nstring values on individual nodes, scoped to your plugin.\n\n@param key - The plugin data key.\n@param value - The value to set, or `null` to remove.\n\nUse `"Node.setPluginData"` to check if this method is allowed.',
			references: [],
		},
		{
			name: "walk",
			category: "WebPageNode",
			signature: "walk(this: AnyNode): AsyncGenerator<AnyNode>",
			description:
				"Walk this node and its descendants recursively using an async\ngenerator. Yields nodes depth-first.",
			references: ["AnyNode"],
		},
		{
			name: "zoomIntoView",
			category: "WebPageNode",
			signature: "zoomIntoView(options?: ZoomIntoViewOptions): Promise<void>",
			description:
				"Pans and zooms the viewport to center the node.\n\n@param options - Options like `maxZoom` and `skipIfVisible`.",
			references: ["ZoomIntoViewOptions"],
		},
	],
};

/** Get a method by Category.methodName */
export function getMethod(query: string): MethodInfo | undefined {
	const [category, methodName] = query.split(".", 2);
	if (!methodName) return undefined;
	const methods = methodsByCategory[category.toLowerCase()];
	return methods?.find((m) => m.name === methodName);
}

/** Get class info and all its methods */
export function getClass(
	name: string,
): { info: ClassInfo; methods: MethodInfo[] } | undefined {
	const info = classes[name.toLowerCase()];
	if (!info) return undefined;
	const methods = methodsByCategory[name.toLowerCase()] ?? [];
	return { info, methods };
}

/** Get a type definition by name */
export function getType(name: string): TypeInfo | undefined {
	return types[name.toLowerCase()];
}
