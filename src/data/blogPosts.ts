interface Section {
  title: string;
  content: string[];
}

interface Content {
  intro: string;
  sections: Section[];
  conclusion: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  imageClass: string;
  date: string;
  readTime: string;
  content: Content;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'evening-ritual',
    title: 'Transform Your Evening with Our Self-Care Ritual',
    category: 'Rituals',
    excerpt: 'Discover how to create a luxurious and effective evening self-care routine that will transform your skin while helping you unwind.',
    imageClass: 'self-care-ritual',
    date: 'May 15, 2024',
    readTime: '5 min read',
    content: {
      intro: 'Creating a mindful evening skincare ritual is more than just applying products - it is about taking time for yourself, unwinding from the day, and nurturing both your skin and soul. In this guide, we will explore how to create the perfect evening self-care ritual that will help you achieve glowing skin while preparing your mind and body for restful sleep.',
      sections: [
        {
          title: 'Why an Evening Ritual Matters',
          content: [
            'Your skin regeneration process peaks during nighttime, making your evening skincare routine crucial for maintaining healthy, radiant skin.',
            'An evening ritual signals to your body that it is time to wind down, helping reduce stress and improve sleep quality.',
            'Consistent evening skincare helps prevent premature aging and maintains skin barrier function.'
          ]
        },
        {
          title: 'Setting the Mood',
          content: [
            'Create a calming atmosphere with soft lighting or candles',
            'Play gentle, soothing music to help you unwind',
            'Take a few deep breaths and set your intention for self-care'
          ]
        },
        {
          title: 'The Perfect Product Sequence',
          content: [
            'Start with Haven Muse Body Scrub to gently exfoliate and prepare your skin',
            'Follow with Haven Bliss Body Lotion to lock in moisture',
            'Complete your ritual with Haven Glow Body Oil for deep nourishment and a luminous finish'
          ]
        },
        {
          title: 'Mindful Application Techniques',
          content: [
            'Use gentle, upward strokes when applying products',
            'Take time to massage each product into your skin',
            'Focus on areas that need extra attention',
            'Practice gratitude for this moment of self-care'
          ]
        }
      ],
      conclusion: 'Remember, your evening skincare ritual is your time to reconnect with yourself and show appreciation for your body. Make it a sacred practice, and you will not only see improvements in your skin but also in your overall well-being.'
    }
  },
  {
    id: 'natural-ingredients',
    title: 'Understanding Natural Skincare Ingredients',
    category: 'Ingredients',
    excerpt: 'Learn about the powerful natural ingredients in Haven products and how they benefit your skin.',
    imageClass: 'natural-ingredients',
    date: 'May 12, 2024',
    readTime: '4 min read',
    content: {
      intro: 'Natural ingredients have been used for centuries in skincare for their powerful healing and nurturing properties. At Haven, we carefully select each ingredient for its specific benefits and how it works in harmony with your skin. Let us explore the key natural ingredients in our products and understand why they are so effective.',
      sections: [
        {
          title: 'The Power of Plant Oils',
          content: [
            'Argan Oil: Rich in vitamin E and fatty acids, it deeply nourishes and protects the skin',
            'Jojoba Oil: Mimics your skin natural oils, helping balance oil production',
            'Rosehip Oil: Contains vitamin C and retinoids for natural skin renewal'
          ]
        },
        {
          title: 'Essential Minerals and Vitamins',
          content: [
            'Magnesium: Helps reduce inflammation and supports skin barrier function',
            'Vitamin E: A powerful antioxidant that protects against environmental damage',
            'Zinc: Supports natural healing and helps control oil production'
          ]
        },
        {
          title: 'Botanical Extracts',
          content: [
            'Chamomile: Soothes sensitive and irritated skin',
            'Green Tea: Provides antioxidant protection and reduces inflammation',
            'Aloe Vera: Hydrates and calms the skin while supporting healing'
          ]
        },
        {
          title: 'Natural Exfoliants',
          content: [
            'Sugar Crystals: Gently remove dead skin cells without harsh abrasion',
            'Fruit Enzymes: Provide chemical exfoliation for smoother skin',
            'Ground Seeds: Offer sustainable, biodegradable physical exfoliation'
          ]
        }
      ],
      conclusion: 'By choosing products with natural ingredients, you are not just caring for your skin - you are also making a choice that is better for the environment. Our commitment to natural ingredients ensures that you get effective skincare while staying true to our sustainable values.'
    }
  },
  {
    id: 'summer-skincare',
    title: 'Summer Skincare Tips for Glowing Skin',
    category: 'Tips',
    excerpt: 'Essential tips to keep your skin healthy, protected, and glowing during the hot summer months.',
    imageClass: 'glowing-skin',
    date: 'May 10, 2024',
    readTime: '3 min read',
    content: {
      intro: 'As temperatures rise and humidity levels change, your skin needs special attention during the summer months. Here is your complete guide to maintaining healthy, glowing skin while protecting it from the summer elements.',
      sections: [
        {
          title: 'Protecting Your Skin',
          content: [
            'Always apply broad-spectrum sunscreen, even on cloudy days',
            'Reapply sunscreen every 2 hours when outdoors',
            'Wear protective clothing and seek shade during peak sun hours'
          ]
        },
        {
          title: 'Hydration is Key',
          content: [
            'Drink plenty of water throughout the day',
            'Use lightweight, hydrating products that will not clog pores',
            'Consider using a facial mist for quick hydration boosts'
          ]
        },
        {
          title: 'Adjusting Your Routine',
          content: [
            'Switch to lighter moisturizers during summer months',
            'Exfoliate regularly but gently to prevent congestion',
            'Use cooling products to soothe sun-exposed skin'
          ]
        },
        {
          title: 'Post-Sun Care',
          content: [
            'Apply Haven Bliss Body Lotion to maintain skin hydration',
            'Use Haven Glow Body Oil to nourish and repair sun-exposed skin',
            'Take cool showers to prevent skin dehydration'
          ]
        }
      ],
      conclusion: 'Summer skincare does not have to be complicated. Focus on protection, hydration, and gentle care, and your skin will thank you with a healthy, natural glow all season long.'
    }
  },
  {
    id: 'science-of-moisturizing',
    title: 'The Science Behind Skin Moisturization',
    category: 'Science',
    excerpt: 'Dive deep into the science of how moisturizers work and why they are essential for healthy skin.',
    imageClass: 'science-skin',
    date: 'May 8, 2024',
    readTime: '6 min read',
    content: {
      intro: 'Understanding the science behind skin moisturization helps us make better choices for our skincare routine. Let us dive into how moisturizers work, what ingredients matter most, and why proper hydration is crucial for skin health.',
      sections: [
        {
          title: 'Skin Structure and Function',
          content: [
            'The skin barrier function and how it maintains hydration',
            'The role of natural moisturizing factors (NMFs)',
            'How environmental factors affect skin hydration'
          ]
        },
        {
          title: 'Types of Moisturizing Ingredients',
          content: [
            'Humectants: Draw water into the skin (e.g., glycerin, hyaluronic acid)',
            'Emollients: Fill spaces between skin cells (e.g., natural oils)',
            'Occlusives: Create a barrier to prevent water loss (e.g., butters, waxes)'
          ]
        },
        {
          title: 'The Moisturization Process',
          content: [
            'How different ingredients work together for optimal hydration',
            'The importance of proper application techniques',
            'Timing and frequency of moisturizer application'
          ]
        },
        {
          title: 'Signs of Proper Hydration',
          content: [
            'How to recognize well-moisturized skin',
            'Common signs of dehydration',
            'When to adjust your moisturizing routine'
          ]
        }
      ],
      conclusion: 'Understanding the science of moisturization empowers us to make informed choices about our skincare. By choosing products with the right combination of ingredients and applying them correctly, we can maintain optimal skin hydration and health.'
    }
  },
  {
    id: 'mindful-self-care',
    title: 'The Art of Mindful Self-Care: Beyond Skincare',
    category: 'Wellness',
    excerpt: 'Explore how to create a mindful self-care practice that nurtures your body and soul through therapeutic body care rituals.',
    imageClass: 'art-skincare',
    date: 'May 5, 2024',
    readTime: '7 min read',
    content: {
      intro: 'Self-care is more than just a trendy buzzword - it is a fundamental practice for maintaining physical, emotional, and mental well-being. In this guide, we explore how to create a mindful self-care practice that nurtures your body and soul, with a focus on the therapeutic benefits of body care rituals.',
      sections: [
        {
          title: 'Understanding Mindful Self-Care',
          content: [
            'Mindful self-care involves being present and intentional with your self-care practices',
            'It means listening to your body and responding to its needs with compassion',
            'Regular practice helps reduce stress, anxiety, and promotes overall wellness'
          ]
        },
        {
          title: 'Creating Sacred Space',
          content: [
            'Designate a specific area in your home for your self-care rituals',
            'Include elements that engage all senses - aromatherapy, soft textures, calming sounds',
            'Keep your Haven products organized and easily accessible'
          ]
        },
        {
          title: 'Body Care as Meditation',
          content: [
            'Transform your body care routine into a moving meditation',
            'Focus on the sensations of applying each product mindfully',
            'Use this time to practice gratitude for your body and its functions'
          ]
        },
        {
          title: 'Incorporating Mindfulness Techniques',
          content: [
            'Practice deep breathing while applying Haven Bliss Body Lotion',
            'Use body scanning meditation during your Haven Glow Oil application',
            'Set positive intentions while exfoliating with Haven Muse Scrub'
          ]
        }
      ],
      conclusion: 'Remember that mindful self-care is not about perfection - it is about creating moments of peace and connection with yourself. By approaching your body care routine with mindfulness and intention, you transform simple daily tasks into powerful acts of self-love and healing.'
    }
  },
  {
    id: 'sustainable-beauty',
    title: 'Sustainable Beauty: Our Commitment to the Planet',
    category: 'Sustainability',
    excerpt: 'Learn about our commitment to sustainable beauty practices and how we minimize our environmental impact while delivering effective skincare.',
    imageClass: 'sustainable',
    date: 'May 3, 2024',
    readTime: '5 min read',
    content: {
      intro: 'At Haven, we believe that caring for your skin should never come at the expense of our planet. Discover our commitment to sustainable beauty practices and how we are working to minimize our environmental impact while delivering effective, natural skincare solutions.',
      sections: [
        {
          title: 'Our Sustainable Practices',
          content: [
            'Ethically sourced ingredients from sustainable suppliers',
            'Recyclable and minimal packaging design',
            'Zero-waste initiatives in our production process'
          ]
        },
        {
          title: 'Conscious Ingredient Selection',
          content: [
            'We prioritize organic and locally sourced ingredients when possible',
            'Our ingredients are biodegradable and environmentally safe',
            'We never use harmful chemicals or microplastics'
          ]
        },
        {
          title: 'Packaging Innovation',
          content: [
            'All our containers are made from recycled or recyclable materials',
            'We use minimal packaging to reduce waste',
            'Our shipping materials are biodegradable and plastic-free'
          ]
        },
        {
          title: 'Supporting Environmental Causes',
          content: [
            'Partnership with environmental organizations',
            'Tree planting initiative for every order',
            'Regular beach and forest cleanup events'
          ]
        }
      ],
      conclusion: 'Sustainability is not just a trend - it is a responsibility we take seriously at Haven. By choosing our products, you are not only caring for your skin but also contributing to a more sustainable future for our planet.'
    }
  }
]; 