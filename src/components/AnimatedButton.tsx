import clsx from 'clsx'
import MoveUpButton from './MoveUpButton'

const AnimatedButton = ({ className, label, icon }: { className?: string, label: string, icon?: React.ReactNode }) => {
    return (
        <button className={clsx("cursor-pointer flex gap-1.5 items-center relative bg-[#F1F1F1] py-3 px-[17px] rounded-[21px] group overflow-hidden transition-colors duration-300", className)}>
            {icon && <span className="z-10 group-hover:text-white transition-colors duration-500 ease-in-out">{icon}</span>}
            <MoveUpButton label={label} className="z-10 group-hover:text-white transition-colors duration-500 ease-in-out"/>
            <span className="-translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out h-full w-full bg-primary absolute top-o left-0 z-1 rounded-[21px]"></span>
        </button>
    )
}

export default AnimatedButton