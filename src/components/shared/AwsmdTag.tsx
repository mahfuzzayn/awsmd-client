const AwsmdTag = ({ serial, title }: { serial?: number; title: string }) => {
    return (
        <div className="flex gap-1 items-center text-lg text-[#999999] font-medium">
            {serial &&
                <>
                    <span>{serial < 10 ? `0${serial}` : serial}</span>
                    <span className="h-[1.5px] tracking-wide w-4 bg-[#999999] inline-block"></span>
                </>}
            <span>{title}</span>
        </div>
    )
}

export default AwsmdTag