import { Button } from '@ajk-ui/button'
import { useTheme } from '@ajk-ui/theme-utils'

export interface PaginationProps {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}

export const Pagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  const { theme } = useTheme()

  return (
    <div className="flex items-center justify-center space-x-2 py-8">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        variant="primary"
        size="sm"
      >
        Anterior
      </Button>

      <div className="flex space-x-1">
        {pageNumbers.map(page => (
          <Button
            variant="primary"
            key={page}
            onClick={() => onPageChange(page)}
            active={currentPage === page}
            size="sm"
          >
            {page}
          </Button>
        ))}
      </div>

      <Button
        variant="primary"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        size="sm"
      >
        Siguiente
      </Button>
    </div>
  )
}
