import WhyUsImage from '../assets/why-us-img.jpg';
import { IoCafeSharp } from "react-icons/io5";
import { HiShieldCheck, HiStar, HiFire, HiOutlineTicket, HiOutlineSparkles } from "react-icons/hi2";
import ProductCard from './ProductCard';
import product1 from '../assets/products-01.jpg';
import product2 from '../assets/products-02.jpg';
import product3 from '../assets/products-03.jpg';
import product4 from '../assets/products-04.jpg';

const FeatureItem = ({ icon, title, children }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 bg-amber-100/60 p-3 rounded-full">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{children}</p>
    </div>
  </div>  
);


function HighlightsSection({id}) {
  return ( 
    <section id={id} className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* WHY CHOOSE OUR COFFEE */}
        <div className="py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="text-center">
              <img src={WhyUsImage} alt="Why Choose Our Coffee" className="inline-block" />
            </div>

            <div>
              <h2 className="font-serif text-4xl font-bold text-gray-800">Why Choose Our Coffee</h2>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mt-10">
                <FeatureItem icon={<IoCafeSharp className="w-6 h-6 text-amber-900" />} title="Supreme Beans">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </FeatureItem>
                <FeatureItem icon={<HiShieldCheck className="w-6 h-6 text-amber-900" />} title="Without Impurities">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </FeatureItem>
                <FeatureItem icon={<HiStar className="w-6 h-6 text-amber-900" />} title="High Quality">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </FeatureItem>
                <FeatureItem icon={<HiFire className="w-6 h-6 text-amber-900" />} title="Professional Roasting">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </FeatureItem>
                <FeatureItem icon={<HiOutlineSparkles className="w-6 h-6 text-amber-900" />} title="Extraordinary Taste">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </FeatureItem>
                <FeatureItem icon={<HiOutlineTicket className="w-6 h-6 text-amber-900" />} title="Nice Prices">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </FeatureItem>
              </div>
            </div>
          </div>
        </div>

        {/* WE OFFER YOU */}
        <div className="py-24 text-center">
          <h2 className="font-serif text-4xl font-bold text-gray-800">We Offer You The Best We Have</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <ProductCard imageSrc={product1} name="Arabica With Irish Cream" initialPrice={17.00} />
            <ProductCard imageSrc={product2} name="Arabica With Irish Cream" initialPrice={17.00} />
            <ProductCard imageSrc={product3} name="Arabica With Irish Cream" initialPrice={17.00} />
            <ProductCard imageSrc={product4} name="Arabica With Irish Cream" initialPrice={17.00} />
          </div>
        </div>
        
      </div>
    </section>  
  );
}

export default HighlightsSection;