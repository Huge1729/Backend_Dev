import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({     // app.use used for configure the middleware
    origin: process.env.CORS_ORIGIN,    // fronted se data/req kha se aayga
    credentials: true   // 
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))  // kuchh url h + c krte hai kuchh h%20C kr dete haii.
app.use(express.static("public"))  // used for storege images etc
app.use(cookieParser())  // broweser ki cookies accsess and manage ke liyee

// Middleware ---> feild between req and response
// next flag indicated the midddle ware .





export { app }
