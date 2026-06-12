import { Request } from "express";

declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: number;
        role: "user" | "admin" | "superadmin";
      };
    }
  }
}

export {};

// import "express";

// declare global {
//   namespace Express {
//     interface Request {
//       user?: {
//         userId: number;
//         role: "user" | "admin" | "superadmin";
//       };
//     }
//   }
// }

// export {};

// import "express";

// declare module "express-serve-static-core" {
//   interface Request {
//     user?: {
//       userId: number;
//       role: "user" | "admin" | "superadmin";
//     };
//   }
// }

// export {};



// import "express";

// declare global {
//   namespace Express {
//     interface User {
//       userId: number;
//       role: "user" | "admin" | "superadmin";
//     }
//   }
// }

// declare module "express-serve-static-core" {
//   interface Request {
//     user?: Express.User;
//   }
// }

// export {};