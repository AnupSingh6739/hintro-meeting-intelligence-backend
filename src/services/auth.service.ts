import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../config/prisma";

interface SignupData {
  name: string;
  email: string;
  password: string;
}

export const signupService = async (data: SignupData) => {
  const { name, email, password } = data;

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: {
      email
    }
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  });

  // Generate JWT token
  const token = jwt.sign(
    {
      userId: user.id
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "7d"
    }
  );

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  };
};

export const loginService = async (
  email: string,
  password: string
) => {

  const user = await prisma.user.findUnique({
    where: {
      email
    }
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isPasswordValid = await bcrypt.compare(
    password,
    user.password
  );

  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    {
      userId: user.id
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "7d"
    }
  );

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  };
};