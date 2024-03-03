import EntityLink from "@/components/EntityLink"
import { IAssociatedShelf } from "@/interfaces/browseDtos"
import { FC } from "react"

interface AssociatedShelvesMessageProps {
  shelves: IAssociatedShelf[]
}

const AssociatedShelvesMessage: FC<AssociatedShelvesMessageProps> = ({
  shelves,
}) => {
  const shelfLinks = shelves.slice(0, 2).map((s: IAssociatedShelf) => {
    return (
      <EntityLink
        key={s.shelfId}
        className="underline"
        routeSegmentId={s.shelfId}
        title={s.title}
        variant="shelf"
      />
    )
  })

  return (
    <>
      {shelves.length ? (
        <div className="h-fit w-full rounded-theme-small bg-theme-beige-400 px-3 py-2 italic">
          <div className="mr-1 text-theme-gray-500">This book is saved in:</div>
          <span>
            {shelfLinks[0]}
            {shelves[1] && <div>{shelfLinks[1]}</div>}
            {shelves.length > 2 && <div>and others.</div>}
          </span>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default AssociatedShelvesMessage
