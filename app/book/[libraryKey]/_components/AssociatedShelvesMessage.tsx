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
        <div className="text-theme-gray-500 mb-5 flex h-8 w-fit items-center bg-theme-beige-400 px-2 italic rounded-theme-small">
          <span className="mr-1">This book is saved in</span>
          <span>
            {shelfLinks[0]}
            {shelves.length === 1 ? (
              "."
            ) : shelves.length === 2 ? (
              <> and {shelfLinks[1]}.</>
            ) : (
              <>, {shelfLinks[1]}, and others.</>
            )}
          </span>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default AssociatedShelvesMessage
