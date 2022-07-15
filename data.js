const mensajeBienvenido = (newFrom) => {
    return {
      messaging_product: "whatsapp",
      to: newFrom,
      type: "text",
      text: {
        preview_url: false,
        body: "BIENVENIDO",
      },
    };
  };
  
  const mensajeLista = (newFrom) => {
    return {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: newFrom,
      type: "interactive",
      interactive: {
        type: "list",
        header: {
          type: "text",
          text: "HEADER_TEXT",
        },
        body: {
          text: "BODY_TEXT",
        },
        footer: {
          text: "FOOTER_TEXT",
        },
        action: {
          button: "BUTTON_TEXT",
          sections: [
            {
              title: "SECTION_1_TITLE",
              rows: [
                {
                  id: "SECTION_1_ROW_1_ID",
                  title: "SECTION_1_ROW_1_TITLE",
                  description: "SECTION_1_ROW_1_DESCRIPTION",
                },
                {
                  id: "SECTION_1_ROW_2_ID",
                  title: "SECTION_1_ROW_2_TITLE",
                  description: "SECTION_1_ROW_2_DESCRIPTION",
                },
              ],
            },
            {
              title: "SECTION_2_TITLE",
              rows: [
                {
                  id: "SECTION_2_ROW_1_ID",
                  title: "SECTION_2_ROW_1_TITLE",
                  description: "SECTION_2_ROW_1_DESCRIPTION",
                },
                {
                  id: "SECTION_2_ROW_2_ID",
                  title: "SECTION_2_ROW_2_TITLE",
                  description: "SECTION_2_ROW_2_DESCRIPTION",
                },
              ],
            },
          ],
        },
      },
    };
  };
  
  const mensajeBoton = (newFrom) => {
    return {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: newFrom,
      type: "interactive",
      interactive: {
        type: "button",
        body: {
          text: "Por favor elija la opcion q corresponda",
        },
        action: {
          buttons: [
            {
              type: "reply",
              reply: {
                id: "465",
                title: "Opcion A",
              },
            },
            {
              type: "reply",
              reply: {
                id: "65465",
                title: "Opcion B",
              },
            },
          ],
        },
      },
    };
  };
  
  const mensajeOpciones = (newFrom) => {
    return {
      messaging_product: "whatsapp",
      to: newFrom,
      type: "template",
      template: {
        name: "bienvenido_test",
        language: {
          code: "en_US",
        },
      },
    };
  };
  
  module.exports = {
    mensajeBienvenido,
    mensajeLista,
    mensajeBoton,
    mensajeOpciones
  };
  