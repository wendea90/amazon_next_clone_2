import Image from 'next/image';
import React from 'react'
import FormattedPrice from './FormattedPrice';
import { LuMinus, LuPlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { decreaseQuantity, deleteProduct, increaseQuantity } from '@/store/nextSlice';


interface Item {
    brand: string;
    category: string;
    description: string;
    image: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
    title: string;
    _id: number;
    quantity: number;
}

interface cartProductProps {
    item: Item
}

const CartProduct = ({ item }: cartProductProps) => {

    const dispatch = useDispatch();

    return (
        <div className='bg-gray-100 rounded-lg flex items-center gap-4'>

            {/* images */}
            <Image
                className='object-cover'
                src={item.image}
                alt='productImage'
                width={150}
                height={150}
            />
            <div className='flex items-center px-2 gap-4'>
                <div className='flex flex-col gap-1'>

                    {/* title */}
                    <p className='text-lg font-semibold text-amazon_blue'>
                        {item.title}
                    </p>

                    {/* description */}
                    <p className='text-sm text-gray-600'>
                        {item.description}
                    </p>

                    {/* price */}
                    <p className='text-sm text-gray-600'>
                        Unit Price{" "}
                        <span className='font-semibold text-amazon_blue'>
                            <FormattedPrice amount={item.price} />
                        </span>
                    </p>

                    {/* + & - button */}
                    <div className='flex items-center gap-6'>
                        <div className='flex items-center justify-between mt-1 border border-gray-300 px-4 py-1 rounded-full w-28 shadow-lg'>
                            <span
                                onClick={() => dispatch(increaseQuantity({
                                    _id: item._id,
                                    brand: item.brand,
                                    category: item.category,
                                    description: item.description,
                                    image: item.image,
                                    isNew: item.isNew,
                                    oldPrice: item.oldPrice,
                                    price: item.price,
                                    title: item.title,
                                    quantity: 1,
                                }))}
                                className='w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300'>
                                <LuPlus />
                            </span>
                            <span >
                                {item.quantity}
                            </span>
                            <span
                                onClick={() => dispatch(decreaseQuantity({
                                    _id: item._id,
                                    brand: item.brand,
                                    category: item.category,
                                    description: item.description,
                                    image: item.image,
                                    isNew: item.isNew,
                                    oldPrice: item.oldPrice,
                                    price: item.price,
                                    title: item.title,
                                    quantity: 1,
                                }))}
                                className='w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300'>
                                <LuMinus />
                            </span>
                        </div>

                        {/* delete */}
                        <div
                            onClick={() => dispatch(deleteProduct(item._id))}
                            className="flex items-center text-sm font-medium text-gray-400 hover:text-red-600 cursor-pointer duration-300">
                            <IoMdClose className="mt-[2px]" />
                            <p>
                                Remove
                            </p>
                        </div>
                    </div>
                </div>

                {/* formated price or when you increase product price */}
                <div className="text-lg font-semibold text-amazon_blue">
                    <FormattedPrice amount={item.price * item.quantity} />
                </div>
            </div>
        </div>
    )
}

export default CartProduct