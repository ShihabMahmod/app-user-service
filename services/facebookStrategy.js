import passport from "passport";
import { Strategy as FacebookStrategy } from "passport-facebook";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["error", "query"],
});

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: 'https://getwy-test.vercel.app/facebook/callback',
      profileFields: ['id', 'emails', 'name']
    },
    async function (accessToken, refreshToken, profile, cb) {

      const email = profile.emails[0]?.value;

      const user = await prisma.user.findFirst({
        where: {
          email: email, // please update user model according to your need
        },
      });

      if (user) {
        return cb(null, user);
      }
      console.log(profile, "profile");

      const create_user = await prisma.user.create({
        data: {
          name: profile.name?.givenName + ' ' + profile.name?.familyName,
          email: email,
          email_verified: "true",
          is_organizer: 0,
          is_approved: 0,
          verified_token: null,
          password: "",
        },
      });

      return cb(null, create_user);
    }
  )
);