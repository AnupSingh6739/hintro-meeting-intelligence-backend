import swaggerJsdoc from "swagger-jsdoc";

const options = {

  definition: {

    openapi: "3.0.0",

    info: {
      title: "Hintro Meeting Intelligence API",

      version: "1.0.0",

      description:
        "AI-powered meeting intelligence backend"
    },

    servers: [
      {
        url: "http://localhost:3000"
      }
    ],

    components: {

      securitySchemes: {

        bearerAuth: {

          type: "http",

          scheme: "bearer",

          bearerFormat: "JWT"
        }

      }

    },

    security: [
      {
        bearerAuth: []
      }
    ]

  },

  apis: ["./src/routes/*.ts"]

};

export const swaggerSpec =
  swaggerJsdoc(options);