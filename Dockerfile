FROM node:20-alpine

WORKDIR /app

COPY . .

ENV DATABASE_URL=postgresql://testingdb_owner:avTFlIBy3d6k@ep-falling-salad-a5fxr2jb.us-east-2.aws.neon.tech/testingdb?sslmode=require

RUN npm install
RUN npm run build
RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "start"]
