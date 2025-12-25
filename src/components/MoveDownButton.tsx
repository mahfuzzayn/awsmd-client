import clsx from "clsx"

const MoveDownButton = ({ label, className }: { label: string, className?: string }) => {
    return (
        <span className={clsx("cursor-pointer flex flex-col h-[15px] leading-4 overflow-hidden select-none", className)}>
            <span className="-translate-y-[17px] group-hover:translate-y-0 transition-transform duration-500 ease-in-out">{label}</span>
            <span className="-translate-y-[17px] group-hover:translate-y-[3px] transition-transform duration-500 ease-in-out">{label}</span>
        </span>
    )
}

export default MoveDownButton