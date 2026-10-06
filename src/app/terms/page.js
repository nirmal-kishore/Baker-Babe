'use client'

import { motion } from 'motion/react'
import { ScrollText } from 'lucide-react'

const sections = [
  {
    title: '1. Bookings & Payments',
    points: [
      'A deposit is required to secure and confirm your order/date. Your booking is not confirmed until the deposit has been received.',
      'The remaining balance must be paid by the due date stated on your invoice.',
      'Orders that are not paid in full by the due date may be cancelled at Baker Babe’s discretion.',
      'Prices are based on the agreed design, size, flavour, quantity and inclusions at the time of booking.',
      'Any changes requested after confirmation may result in additional charges.',
      'Prices are exclusive of GST where applicable.',
    ],
  },
  {
    title: '2. Cancellations & Refunds',
    points: [
      'Deposits are non-refundable once an order has been confirmed, as the date, ingredients, materials and preparation time are allocated to your order.',
      'Cancellations made less than 7 days before the collection/delivery date may result in the full order amount being payable.',
      'If an order has already been prepared, customised or commenced, no refund will be provided for a change of mind or cancellation.',
      'Refunds or credits may be considered in exceptional circumstances at the discretion of Baker Babe.',
      'Baker Babe reserves the right to cancel an order in circumstances beyond our reasonable control. Where Baker Babe cancels an order, any payment relating to the unfulfilled portion of the order will be addressed appropriately.',
    ],
  },
  {
    title: '3. Custom Designs & Colour Variations',
    points: [
      'Custom cakes are handmade and may have slight variations from reference images.',
      'Reference images are used for inspiration and cannot always be replicated exactly.',
      'Colours may vary slightly due to lighting, screens, edible products and the nature of food colouring.',
      'Minor variations in piping, decoration, texture, shape and finish are part of handmade products and are not considered defects.',
      'Baker Babe will make reasonable efforts to achieve the agreed design and colour palette.',
    ],
  },
  {
    title: '4. Changes to Orders',
    points: [
      'Design, flavour, size, quantity and wording changes must be requested as early as possible.',
      'Changes are subject to availability and may incur additional costs.',
      'Last-minute changes may not be possible once preparation has commenced.',
      'Changes to the event date are subject to availability and are not guaranteed.',
    ],
  },
  {
    title: '5. Collection & Delivery',
    points: [
      'Customers are responsible for providing the correct collection/delivery address and contact details.',
      'Customers collecting their order are responsible for ensuring the cake is transported safely and appropriately.',
      'Cakes should be placed on a flat, stable surface and kept in a cool environment during transportation.',
      'Baker Babe is not responsible for damage occurring after the cake has been collected or delivered and accepted by the customer, where the damage is caused by transportation, handling, heat or unsuitable storage.',
      'Delivery times may be affected by traffic, weather or unforeseen circumstances. Reasonable efforts will be made to communicate any delays.',
    ],
  },
  {
    title: '6. Cake Care & Storage',
    points: [
      'Cakes should be kept refrigerated where advised and away from direct sunlight, heat and moisture.',
      'Cakes should remain in their original packaging until ready to display.',
      'During warm weather, additional care is required as buttercream, chocolate decorations and other edible elements may soften or melt.',
      'Baker Babe is not responsible for deterioration caused by incorrect storage or handling after collection/delivery.',
    ],
  },
  {
    title: '7. Allergies & Dietary Requirements',
    points: [
      'Customers must advise Baker Babe of any allergies or dietary requirements before placing the order.',
      'While we take reasonable precautions when preparing dietary requirements, our kitchen handles products containing common allergens, and therefore we cannot guarantee an entirely allergen-free environment. Customers are responsible for informing their guests of any relevant allergens before consuming our products.',
    ],
  },
  {
    title: '8. Freshness & Product Quality',
    points: [
      'All products are freshly prepared for each order.',
      'Cakes and desserts are best enjoyed within the recommended timeframe provided by Baker Babe.',
      'Once the product has been collected or delivered and accepted, Baker Babe cannot be responsible for changes caused by storage, temperature, handling or environmental conditions.',
    ],
  },
]

export default function TermsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <ScrollText className="w-8 h-8 text-baker-pink" />
            </div>
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-baker-dark">
              Terms &amp; Conditions
            </h1>
            <p className="font-script text-2xl text-baker-pink mt-4">
              Applies to all cake, cupcake, dessert and custom orders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm space-y-10"
          >
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-playfair text-2xl font-bold text-baker-dark mb-4">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full bg-baker-pink shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-gray-600 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
