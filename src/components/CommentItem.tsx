import { CommentItemProps } from "../types/types";
import Image from "next/image";
function CommentItem({ avatar, comment, date, name }: CommentItemProps) {
    return (
        <div className='flex gap-5 py-4 border-b border-gray-300'>
            <div className='commentImage mt-1'>
                <div className='w-16 h-16'>
                    <Image className='w-full h-full rounded-full  object-cover' src={avatar} alt='user' width={100} height={100} />
                </div>
            </div>

            <div className='flex-col'>

                <h4 className='text-[15px] font-[600] text-gray-700 mb-1'>{name}</h4>
                <p className='text-sm text-gray-600'>{date}</p>
                <p className='text-sm text-gray-600 mt-3'>{comment}</p>
            </div>

        </div>
    )
}

export default CommentItem