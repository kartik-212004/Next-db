-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_mail_key" ON "user"("mail");
