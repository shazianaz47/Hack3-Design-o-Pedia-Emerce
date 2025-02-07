import Image from "next/image";
import Link from "next/link";
import { Product } from "@/app/types/Product";


interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Link href={`/product/${product.slug}`}>
                <Image
                    src={product.imageUrl}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-lg"
                />
            </Link>

            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
                <p className="text-lg font-bold text-gray-900">${product.price}</p>
                {product.discountPercentage > 0 && (
                    <p className="text-sm text-green-600">
                        {product.discountPercentage}% OFF
                    </p>
                )}
                <div className="mt-3 flex flex-wrap gap-2">
                    {product.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-md"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
