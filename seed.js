const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const adminUser = await prisma.user.upsert({
        where: { email: 'admin@example.com' },
        update: {},
        create: {
            email: 'admin@example.com',
            name: 'Admin User',
            password: hashedPassword,
            role: 'ADMIN',
            balance: 1000.0,
            earnings: 5000.0,
        },
    });

    // Create a regular user for testing
    const userPassword = await bcrypt.hash('user123', 10);
    const testUser = await prisma.user.upsert({
        where: { email: 'user@example.com' },
        update: {},
        create: {
            email: 'user@example.com',
            name: 'Test User',
            password: userPassword,
            role: 'USER',
            balance: 50.0,
            earnings: 120.0,
        },
    });

    console.log('Database seeded successfully:', { adminUser, testUser });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
