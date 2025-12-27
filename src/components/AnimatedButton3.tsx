import clsx from 'clsx'
import MoveDownButton from './MoveDownButton'
import Link from 'next/link';

const AnimatedButton3 = ({ className, label, icon }: { className?: string, label: string, icon?: React.ReactNode; href?: string; }) => {
    return (
        <button className={clsx("cursor-pointer flex gap-1.5 items-center relative bg-[#F1F1F1] py-3 px-[17px] rounded-[21px] group overflow-hidden transition-colors duration-300 border-2 border-[#242424]", className)}>
            <MoveDownButton label={label} className="z-10 text-white group-hover:text-black transition-colors duration-500 ease-in-out" />
            {icon && <span className="relative top-px z-10 group-hover:text-white transition-colors duration-500 ease-in-out">{icon}</span>}
            <span className="h-1 w-1 rounded-full bg-white relative z-10 right-[14px] opacity-100 pointer-events-auto group-hover:opacity-0 group-hover:z-9 group-hover:pointer-events-none top-px transition-all duration-500 ease-in-out"></span>
            <span className="translate-x-0 group-hover:translate-x-[105%] transition-transform duration-500 ease-in-out h-full w-full bg-[#242424] absolute top-0 left-0 z-1 rounded-[21px]"></span>
        </button>
    )
}

export default AnimatedButton3