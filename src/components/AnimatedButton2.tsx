import clsx from 'clsx'
import MoveDownButton from './MoveDownButton'

const AnimatedButton2 = ({ className, label, icon }: { className?: string, label: string, icon?: React.ReactNode }) => {
    return (
        <button className={clsx("cursor-pointer flex gap-1.5 justify-center items-center relative bg-[#F1F1F1] py-3 px-[17px] rounded-[21px] group overflow-hidden transition-colors duration-300", className)}>
            <MoveDownButton label={label} className="z-10 group-hover:text-white transition-colors duration-500 ease-in-out" />
            {icon && <span className="z-10 group-hover:text-white transition-colors duration-500 ease-in-out">{icon}</span>}
            <span className="-translate-x-[105%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out h-full w-full bg-[#242424] absolute top-o left-0 z-1 rounded-[21px]"></span>
        </button>
    )
}

export default AnimatedButton2