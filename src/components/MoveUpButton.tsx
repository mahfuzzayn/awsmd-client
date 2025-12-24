import clsx from "clsx"

const MoveUpButton = ({ label, className }: { label: string, className?: string }) => {
    return (
        <span className={clsx("cursor-pointer flex flex-col h-[15px] leading-4 overflow-hidden select-none", className)}>
            <span className="group-hover:-translate-y-[25px] transition-transform duration-500 ease-in-out">{label}</span>
            <span className="group-hover:-translate-y-[17px] transition-transform duration-500 ease-in-out">{label}</span>
        </span>
    )
}

export default MoveUpButton