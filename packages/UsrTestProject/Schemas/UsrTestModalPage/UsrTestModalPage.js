define("UsrTestModalPage", /**SCHEMA_DEPS*/ [] /**SCHEMA_DEPS*/, function () /**SCHEMA_ARGS*/ /**SCHEMA_ARGS*/ {
  return {
    viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/ [
      {
        operation: "remove",
        name: "TitleContainer",
      },
      {
        operation: "remove",
        name: "PageTitle",
      },
      {
        operation: "insert",
        name: "Label_o49qf1j",
        values: {
          type: "crt.Label",
          caption:
            "#MacrosTemplateString(#ResourceString(Label_o49qf1j_caption)#)#",
          labelType: "headline-1",
          labelThickness: "default",
          labelEllipsis: false,
          labelColor: "auto",
          labelBackgroundColor: "transparent",
          labelTextAlign: "start",
          headingLevel: "label",
          visible: true,
        },
        parentName: "MainHeader",
        propertyName: "items",
        index: 0,
      },
    ] /**SCHEMA_VIEW_CONFIG_DIFF*/,
    viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/ [
      {
        operation: "merge",
        path: ["attributes", "HeaderCaption"],
        values: {
          modelConfig: {},
        },
      },
    ] /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
    modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/ [
      {
        operation: "merge",
        path: [],
        values: {
          dataSources: {},
        },
      },
    ] /**SCHEMA_MODEL_CONFIG_DIFF*/,
    handlers: /**SCHEMA_HANDLERS*/ [
      {
        request: "crt.HandleViewModelInitRequest",
        handler: async (request, next) => {
          console.log("Hello world 1");
          return await next?.handle(request);
        },
      },
    ] /**SCHEMA_HANDLERS*/,
    converters: /**SCHEMA_CONVERTERS*/ {} /**SCHEMA_CONVERTERS*/,
    validators: /**SCHEMA_VALIDATORS*/ {} /**SCHEMA_VALIDATORS*/,
  };
});
