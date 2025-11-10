import React from "react";
import { Button, Card, CardBody } from "@heroui/react";
import PageTemplate from "../components/PageTemplate";

export default function Merch() {
  const merchItems = [
    {
      name: "T-Shirt",
      price: "$8",
      image: "/Merch/tshirt.png",
      sizes: "XS - XL"
    },
    {
      name: "Crewneck",
      price: "$15",
      image: "/Merch/crewneck.png",
      sizes: "XS - XL"
    },
    {
      name: "Sweatpants",
      price: "$20",
      image: "/Merch/sweatpants.png",
      sizes: "XS - XL"
    }
  ];

  return (
    <PageTemplate>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-beach-100 via-coral-100 to-seafoam-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Floating beach elements */}
        <div className="absolute top-6 sm:top-10 left-4 sm:left-10 animate-float">
          <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-beach-200/60 rounded-full backdrop-blur-sm"></div>
        </div>
        <div className="absolute top-12 sm:top-20 right-4 sm:right-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-coral-200/60 rounded-full backdrop-blur-sm"></div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-seafoam-200/60 rounded-full backdrop-blur-sm"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-beach text-beach-700 mb-4 sm:mb-6 animate-fade-in">
            NJ NAACH 3.0 Merch
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-beach-600 font-ocean mb-6 sm:mb-8 animate-slide-up px-4">
            Rep the Jersey Shore vibes with official NJ NAACH merchandise! 🌊
          </p>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-beach-400 to-coral-400 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Merch Grid */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-sand-50 to-beach-50">
        <div className="max-w-7xl mx-auto">
          {/* Merch Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {merchItems.map((item, index) => (
              <Card 
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardBody className="p-6">
                  {/* Product Image */}
                  <div className="relative h-64 sm:h-72 lg:h-80 mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-beach-50 to-seafoam-50 flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="max-h-full max-w-full object-contain p-4"
                    />
                  </div>
                  
                  {/* Product Info */}
                  <div className="text-center">
                    <h3 className="text-2xl sm:text-3xl font-beach text-beach-700 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-3xl sm:text-4xl font-bold text-coral-600 mb-2">
                      {item.price}
                    </p>
                    <p className="text-sm sm:text-base text-beach-600 font-ocean">
                      Sizes: {item.sizes}
                    </p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Order Button */}
          <div className="text-center">
            <Button
              as="a"
              href="https://docs.google.com/forms/d/1QZS08-7u3dEUlxBZIS7jj6OZHC7Pz1__QlqBSKFBak0/edit"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="bg-gradient-to-r from-beach-500 to-seafoam-500 text-white px-16 py-8 sm:px-20 sm:py-10 rounded-full font-ocean font-bold text-2xl sm:text-3xl md:text-4xl shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 animate-pulse"
              style={{ animationDuration: '2s' }}
            >
              🛒 Order Here!
            </Button>
          </div>
        </div>
      </div>

      {/* Order Information */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-beach-50 to-seafoam-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-beach text-beach-700 text-center mb-8 sm:mb-12">
            How to Order
          </h2>
          
          <div className="max-w-2xl mx-auto">
            {/* Payment Info */}
            <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl">
              <CardBody className="p-6 sm:p-8">
                <div className="text-5xl mb-4 text-center">💳</div>
                <h3 className="text-xl sm:text-2xl font-beach text-beach-700 mb-4 text-center">
                  Payment Methods
                </h3>
                <div className="space-y-3 text-beach-600 font-ocean">
                  <div className="bg-beach-50 rounded-lg p-3">
                    <p className="font-semibold text-beach-700">Zelle:</p>
                    <p className="text-sm sm:text-base">njnaach@gmail.com</p>
                  </div>
                  <div className="bg-seafoam-50 rounded-lg p-3">
                    <p className="font-semibold text-beach-700">Venmo:</p>
                    <p className="text-sm sm:text-base">@Himit-Shah</p>
                  </div>
                  <p className="text-sm text-beach-500 italic mt-4">
                    * Include your name and item purchased in the payment description
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Important Notice */}
          <Card className="mt-8 bg-gradient-to-r from-coral-50 to-beach-50 border border-coral-200 shadow-lg">
            <CardBody className="p-6 text-center">
              <p className="text-base sm:text-lg text-beach-700 font-ocean">
                ⚠️ <span className="font-semibold">Important:</span> Orders will only be fulfilled once payment is received. 
                We will contact you with pickup details after your order is confirmed.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-beach-500 to-seafoam-500 py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-beach text-white mb-4 sm:mb-6">
            Rep Your Favorite Competition! 🌊
          </h2>
          <p className="text-lg sm:text-xl text-beach-100 mb-6 sm:mb-8 font-ocean">
            Get your official NJ NAACH 3.0 merch and support our amazing event!
          </p>
          <Button
            as="a"
            href="https://docs.google.com/forms/d/1QZS08-7u3dEUlxBZIS7jj6OZHC7Pz1__QlqBSKFBak0/edit"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="bg-white text-beach-700 px-10 py-4 rounded-full font-ocean font-bold text-lg hover:bg-sand-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Order Your Merch Now! 🛍️
          </Button>
        </div>
      </div>
    </PageTemplate>
  );
}

