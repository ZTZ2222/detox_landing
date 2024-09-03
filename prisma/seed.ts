import { PrismaClient } from "@prisma/client"
import type { zMetaUpsert, zSection, zSocial } from "@/types/content.schema"

const prisma = new PrismaClient()

async function seedSections() {
  const sections: zSection[] = [
    {
      uid: 1,
      slug: "hero",
      sectionName_ru: null,
      sectionName_en: null,
      heading_ru: "Is your body circulation working well?",
      heading_en: "Is your body circulation working well?",
      subheading_ru:
        "Unconscious  bad habilts you may have: delivery and instant food, eating out, and spicy, salty, sweet and stimulating tastes... All these create a vicious cycle in your body",
      subheading_en:
        "Unconscious  bad habilts you may have: delivery and instant food, eating out, and spicy, salty, sweet and stimulating tastes... All these create a vicious cycle in your body",
      primaryButton_ru:
        "Now’s the time to break the vicious cycle and start transition!",
      primaryButton_en:
        "Now’s the time to break the vicious cycle and start transition!",
      secondaryButton_ru: null,
      secondaryButton_en: null,
      image: null,
      cards: [],
    },
    {
      uid: 2,
      slug: "about-us",
      sectionName_ru: null,
      sectionName_en: null,
      heading_ru: "We are - TOP PARTNERS",
      heading_en: "We are - TOP PARTNERS",
      subheading_ru:
        "TOP PARTNERS company has brought together the world's best manufacturers on one platform with exclusive products that meet international standards.",
      subheading_en:
        "TOP PARTNERS company has brought together the world's best manufacturers on one platform with exclusive products that meet international standards.",
      primaryButton_ru: null,
      primaryButton_en: null,
      secondaryButton_ru: null,
      secondaryButton_en: null,
      image: null,
      cards: [
        {
          sectionId: 2,
          title_ru: "Our Mission",
          title_en: "Our Mission",
          description_ru:
            "To unite a community of active and independent individuals who create their own lives and spread love in the world. The company has united on one platform unique, exclusive, highly effective products from leading manufacturers in Japan, Turkey, and Germany that meet global standards. TOP PARTNERS sees its mission in systematic, strategic work to improve the quality of life for those who collaborate with the Company and beyond.",
          description_en:
            "To unite a community of active and independent individuals who create their own lives and spread love in the world. The company has united on one platform unique, exclusive, highly effective products from leading manufacturers in Japan, Turkey, and Germany that meet global standards. TOP PARTNERS sees its mission in systematic, strategic work to improve the quality of life for those who collaborate with the Company and beyond.",
          extra_ru: null,
          extra_en: null,
          bullets_ru: [],
          bullets_en: [],
          image: null,
        },
      ],
    },
    {
      uid: 3,
      slug: "why-us",
      sectionName_ru: null,
      sectionName_en: null,
      heading_ru:
        "Patented method of juice fermentation to support gut health.",
      heading_en:
        "Patented method of juice fermentation to support gut health.",
      subheading_ru:
        "They restore stomach flora, eliminate heartburn, promote good food digestibility, normalize the gastrointestinal tract, restore microflora in children with dysbiosis, increase the number of beneficial lacto bacteria, inhibit the growth of harmful bacteria, improve digestion and overall intestinal function, as well as strengthen immunity.",
      subheading_en:
        "They restore stomach flora, eliminate heartburn, promote good food digestibility, normalize the gastrointestinal tract, restore microflora in children with dysbiosis, increase the number of beneficial lacto bacteria, inhibit the growth of harmful bacteria, improve digestion and overall intestinal function, as well as strengthen immunity.",
      primaryButton_ru: "TRIO juices consist of over 49 components!",
      primaryButton_en: "TRIO juices consist of over 49 components!",
      secondaryButton_ru: null,
      secondaryButton_en: null,
      image: null,
      cards: [],
    },
    {
      uid: 4,
      slug: "products-showcase",
      sectionName_ru: null,
      sectionName_en: null,
      heading_ru: "Juice for nutrition & health control",
      heading_en: "Juice for nutrition & health control",
      subheading_ru:
        "Body circulation the basic formula for health. Now is the time for your body transition!",
      subheading_en:
        "Body circulation the basic formula for health. Now is the time for your body transition!",
      primaryButton_ru: "Traffic light juice Fermented with Probiotics",
      primaryButton_en: "Traffic light juice Fermented with Probiotics",
      secondaryButton_ru: null,
      secondaryButton_en: null,
      image: null,
      cards: [],
    },
    {
      uid: 5,
      slug: "our-products",
      sectionName_ru: null,
      sectionName_en: null,
      heading_ru: null,
      heading_en: null,
      subheading_ru: null,
      subheading_en: null,
      primaryButton_ru: null,
      primaryButton_en: null,
      secondaryButton_ru: null,
      secondaryButton_en: null,
      image: null,
      cards: [
        {
          sectionId: 5,
          title_ru: "Global patented strain BB-12",
          title_en: "Global patented strain BB-12",
          description_ru: "1500 com",
          description_en: "1500 com",
          extra_ru: "Buy now",
          extra_en: "Buy now",
          bullets_ru: [],
          bullets_en: [],
          image: null,
        },
        {
          sectionId: 5,
          title_ru: "Latobacillus acidophilus",
          title_en: "Latobacillus acidophilus",
          description_ru: "1500 com",
          description_en: "1500 com",
          extra_ru: "Buy now",
          extra_en: "Buy now",
          bullets_ru: [],
          bullets_en: [],
          image: null,
        },
        {
          sectionId: 5,
          title_ru: "Streptococcus thermophilus",
          title_en: "Streptococcus thermophilus",
          description_ru: "1500 com",
          description_en: "1500 com",
          extra_ru: "Buy now",
          extra_en: "Buy now",
          bullets_ru: [],
          bullets_en: [],
          image: null,
        },
      ],
    },
    {
      uid: 6,
      slug: "product-details",
      sectionName_ru:
        "To a total of 22 kinds of fermented fruits and vegetables, we added 10 kinds of natural ingredients and 17 kinds of vitamins and dietary fiber.",
      sectionName_en:
        "To a total of 22 kinds of fermented fruits and vegetables, we added 10 kinds of natural ingredients and 17 kinds of vitamins and dietary fiber.",
      heading_ru:
        "* Softer and deeper flavor after 12 hours of fermentation using our patented fermentation method.",
      heading_en:
        "* Softer and deeper flavor after 12 hours of fermentation using our patented fermentation method.",
      subheading_ru:
        "Result of adding probiotics of Chr. Hansen® in Denmark, the birthplace of lactobacillus, and fermenting for optimal hours for enhanced mildness and taste",
      subheading_en:
        "Result of adding probiotics of Chr. Hansen® in Denmark, the birthplace of lactobacillus, and fermenting for optimal hours for enhanced mildness and taste",
      primaryButton_ru: null,
      primaryButton_en: null,
      secondaryButton_ru: null,
      secondaryButton_en: null,
      image: null,
      cards: [
        {
          sectionId: 6,
          title_ru: "NFC Fermented Fruit & Vegetable Juice",
          title_en: "NFC Fermented Fruit & Vegetable Juice",
          description_ru: null,
          description_en: null,
          extra_ru: null,
          extra_en: null,
          bullets_ru: [],
          bullets_en: [],
          image: null,
        },
        {
          sectionId: 6,
          title_ru: "Natural ingredients",
          title_en: "Natural ingredients",
          description_ru: null,
          description_en: null,
          extra_ru: null,
          extra_en: null,
          bullets_ru: [],
          bullets_en: [],
          image: null,
        },
        {
          sectionId: 6,
          title_ru: "Vitamins & dietary fiber",
          title_en: "Vitamins & dietary fiber",
          description_ru: null,
          description_en: null,
          extra_ru: null,
          extra_en: null,
          bullets_ru: [],
          bullets_en: [],
          image: null,
        },
      ],
    },
    {
      uid: 7,
      slug: "product-features",
      sectionName_ru: null,
      sectionName_en: null,
      heading_ru: "A total of 49 ingredients",
      heading_en: "A total of 49 ingredients",
      subheading_ru: "For your virtuous body circulation",
      subheading_en: "For your virtuous body circulation",
      primaryButton_ru: null,
      primaryButton_en: null,
      secondaryButton_ru: null,
      secondaryButton_en: null,
      image: null,
      cards: [
        {
          sectionId: 7,
          title_ru: "NFC Fermented Fruit & Vegetable Juice",
          title_en: "NFC Fermented Fruit & Vegetable Juice",
          description_ru: "-22 kinds (18 fruits, 4 vegetables)",
          description_en: "-22 kinds (18 fruits, 4 vegetables)",
          extra_ru: "#AE2B25",
          extra_en: "#AE2B25",
          bullets_ru: [
            "Pomegranate",
            "Tomato",
            "Strawberry",
            "Aronia",
            "Red Beet",
            "Apple",
            "Quince",
            "Blueberry",
            "Raspberry",
            "Mango",
            "Passion fruit",
          ],
          bullets_en: [
            "Pomegranate",
            "Tomato",
            "Strawberry",
            "Aronia",
            "Red Beet",
            "Apple",
            "Quince",
            "Blueberry",
            "Raspberry",
            "Mango",
            "Passion fruit",
          ],
          image: null,
        },
        {
          sectionId: 7,
          title_ru: "Natural ingredients",
          title_en: "Natural ingredients",
          description_ru: "-10 kinds ",
          description_en: "-10 kinds ",
          extra_ru: "#FFBB41",
          extra_en: "#FFBB41",
          bullets_ru: [
            "Prune",
            "Aloe vera",
            "Cabbage",
            "Gojiberry",
            "ginger",
            "turmeric",
            "chamomile",
            "green tea",
            "broccoli",
          ],
          bullets_en: [
            "Prune",
            "Aloe vera",
            "Cabbage",
            "Gojiberry",
            "ginger",
            "turmeric",
            "chamomile",
            "green tea",
            "broccoli",
          ],
          image: null,
        },
      ],
    },
    {
      uid: 8,
      slug: "three-steps",
      sectionName_ru: null,
      sectionName_en: null,
      heading_ru: "3 Steps",
      heading_en: "3 Steps",
      subheading_ru: "For your virtuous body circulation",
      subheading_en: "For your virtuous body circulation",
      primaryButton_ru: null,
      primaryButton_en: null,
      secondaryButton_ru: null,
      secondaryButton_en: null,
      image: null,
      cards: [
        {
          sectionId: 8,
          title_ru: "Emptying to stop the vicious cycle",
          title_en: "Emptying to stop the vicious cycle",
          description_ru: null,
          description_en: null,
          extra_ru: "#B11515",
          extra_en: "#B11515",
          bullets_ru: [],
          bullets_en: [],
          image: null,
        },
        {
          sectionId: 8,
          title_ru: "Transition Enduring to be redirected",
          title_en: "Transition Enduring to be redirected",
          description_ru: null,
          description_en: null,
          extra_ru: "#FFB919",
          extra_en: "#FFB919",
          bullets_ru: [],
          bullets_en: [],
          image: null,
        },
        {
          sectionId: 8,
          title_ru: "Filling to sustain the virtuous cycle",
          title_en: "Filling to sustain the virtuous cycle",
          description_ru: null,
          description_en: null,
          extra_ru: "#104D28",
          extra_en: "#104D28",
          bullets_ru: [],
          bullets_en: [],
          image: null,
        },
      ],
    },
    {
      uid: 9,
      slug: "faq",
      sectionName_ru: null,
      sectionName_en: null,
      heading_ru: "Q&A",
      heading_en: "Q&A",
      subheading_ru: null,
      subheading_en: null,
      primaryButton_ru: null,
      primaryButton_en: null,
      secondaryButton_ru: null,
      secondaryButton_en: null,
      image: null,
      cards: [
        {
          sectionId: 9,
          title_ru: "Why do I need to take Traffic Light Juice for Your Body?",
          title_en: "Why do I need to take Traffic Light Juice for Your Body?",
          description_ru:
            "We need traffic lights for road circulation, and the same is true for the circulation in our body. Our product was developed based on this idea with three colors—Red for emptying, Yellow for changing, and Green for filling— each with different ingredients used for the relevant concept.",
          description_en:
            "We need traffic lights for road circulation, and the same is true for the circulation in our body. Our product was developed based on this idea with three colors—Red for emptying, Yellow for changing, and Green for filling— each with different ingredients used for the relevant concept.",
          extra_ru: null,
          extra_en: null,
          bullets_ru: [],
          bullets_en: [],
          image: null,
        },
        {
          sectionId: 9,
          title_ru: "Should I follow the program when taking the products?",
          title_en: "Should I follow the program when taking the products?",
          description_ru:
            "We recommend taking them according to our program, but after you become familiar with our program, you may take them according to your preference.",
          description_en:
            "We recommend taking them according to our program, but after you become familiar with our program, you may take them according to your preference.",
          extra_ru: null,
          extra_en: null,
          bullets_ru: [],
          bullets_en: [],
          image: null,
        },
        {
          sectionId: 9,
          title_ru: "When should I consume Traffic Light Juice for Your Body?",
          title_en: "When should I consume Traffic Light Juice for Your Body?",
          description_ru:
            "As Traffic Light Juice for Your Body Fermented with Probiotics is a general food, there is no specific time for intake. You can take it anytime you want, but we recommend consuming it on an empty stomach in the morning if you can.",
          description_en:
            "As Traffic Light Juice for Your Body Fermented with Probiotics is a general food, there is no specific time for intake. You can take it anytime you want, but we recommend consuming it on an empty stomach in the morning if you can.",
          extra_ru: null,
          extra_en: null,
          bullets_ru: [],
          bullets_en: [],
          image: null,
        },
        {
          sectionId: 9,
          title_ru:
            "Is it okay for a pregnant woman, an infant, or a child to take?",
          title_en:
            "Is it okay for a pregnant woman, an infant, or a child to take?",
          description_ru:
            "Traffic Light Juice for Your Body contains 22 kinds of NFC fermented fruits and vegetable juice, natural ingredients, vitamins, and dietary fiber. If one doesn't have an allergy, there would be no problem taking it. We recommend feeding or taking it after accurately checking its ingredients.",
          description_en:
            "Traffic Light Juice for Your Body contains 22 kinds of NFC fermented fruits and vegetable juice, natural ingredients, vitamins, and dietary fiber. If one doesn't have an allergy, there would be no problem taking it. We recommend feeding or taking it after accurately checking its ingredients.",
          extra_ru: null,
          extra_en: null,
          bullets_ru: [],
          bullets_en: [],
          image: null,
        },
        {
          sectionId: 9,
          title_ru: "What is the recommended amount for intake?",
          title_en: "What is the recommended amount for intake?",
          description_ru:
            "There is no specific daily consumption amount for this general food, but we recommend taking one pouch per day according to our program.",
          description_en:
            "There is no specific daily consumption amount for this general food, but we recommend taking one pouch per day according to our program.",
          extra_ru: null,
          extra_en: null,
          bullets_ru: [],
          bullets_en: [],
          image: null,
        },
      ],
    },
    {
      uid: 10,
      slug: "cta",
      sectionName_ru: null,
      sectionName_en: null,
      heading_ru: "Submit Request",
      heading_en: "Submit Request",
      subheading_ru:
        "Leave a request to receive more detailed information and a QR code.",
      subheading_en:
        "Leave a request to receive more detailed information and a QR code.",
      primaryButton_ru: "Send Request",
      primaryButton_en: "Send Request",
      secondaryButton_ru: "We care about your data in our privacy policy.",
      secondaryButton_en: "We care about your data in our privacy policy.",
      image: null,
      cards: [
        {
          sectionId: 10,
          title_ru: "Country codes",
          title_en: "Country codes",
          description_ru: null,
          description_en: null,
          extra_ru: null,
          extra_en: null,
          bullets_ru: ["+996"],
          bullets_en: ["+996"],
          image: null,
        },
      ],
    },
  ]

  await prisma.section.deleteMany({})

  for (const section of sections) {
    const { cards, ...rest } = section
    await prisma.section.create({
      data: rest,
    })

    if (cards.length > 0) {
      await prisma.card.createMany({
        data: cards,
      })
    }
  }

  console.log("Sections have been seeded.")
}

async function seedAdminUser() {
  const adminEmail = process.env.ADMIN_EMAIL
  const adminPassword = process.env.ADMIN_PASSWORD

  if (!adminEmail || !adminPassword) {
    throw new Error(
      "ADMIN_EMAIL and ADMIN_PASSWORD must be set in environment variables.",
    )
  }

  await prisma.user.deleteMany({})

  await prisma.user.create({
    data: {
      name: "Admin",
      email: adminEmail,
      password: adminPassword,
      role: "ADMIN",
    },
  })

  console.log("Admin user has been seeded.")
}

async function seedSocials() {
  const socials: zSocial[] = [
    {
      type: "email",
      name: "detox@gmail.com",
      link: "mailto:detox@gmail.com",
      icon: null,
    },
    {
      type: "instagram",
      name: "@detox",
      link: "https://www.instagram.com/",
      icon: null,
    },
    {
      type: "whatsapp",
      name: "+996 556 50 55 05",
      link: "https://api.whatsapp.com/send?phone=996556505505",
      icon: null,
    },
    {
      type: "telegram",
      name: "+996 556 50 55 05",
      link: "https://t.me/",
      icon: null,
    },
    {
      type: "phone",
      name: "+996 556 50 55 05",
      link: "tel:+996556505505",
      icon: null,
    },
  ]

  prisma.social.deleteMany({})

  // Socials
  await prisma.social.createMany({ data: socials })

  console.log("Socials have been seeded.")
}

async function seedMetadata() {
  const metaData: zMetaUpsert = {
    title_ru: "Detox Title RU",
    title_en: "Detox Title EN",
    description_ru: "Detox Description RU",
    description_en: "Detox Description EN",
    keywords_ru: "Detox Keywords RU",
    keywords_en: "Detox Keywords EN",
    logo1: "https://utfs.io/f/2b766175-ceea-44ab-ba36-1cd9d6e35318-wam8zf.png",
    logo2: "https://utfs.io/f/b81aa205-10b0-4696-8936-2af4404837ed-u21k3.png",
    locations_ru: ["г.Бишкек, ТЦ Евразия 1 этаж", " г.Ош, ул.Масалиева 10"],
    locations_en: [
      "Bishkek, Eurasia shopping center, 1st floor",
      "Osh, Masaliev str. 10",
    ],
    map_coordinates: [42.8780682, 74.5849917],
  }

  prisma.metaData.deleteMany({})

  // metaData
  await prisma.metaData.create({ data: metaData })

  console.log("MetaData have been seeded.")
}

async function main() {
  await seedSections()
  await seedAdminUser()
  await seedSocials()
  await seedMetadata()
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
