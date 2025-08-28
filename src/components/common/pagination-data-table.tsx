import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

export default function PaginationDataTable({
  totalPages,
  currentPage,
  onChangePage,
}: {
  totalPages: number;
  currentPage: number;
  onChangePage: (page: number) => void;
}) {
  return (
    <Pagination>
      <PaginationContent>
        {/* Prev  */}
        <PaginationItem>
          <PaginationPrevious
            href='#'
            onClick={() => {
              if (currentPage > 1) {
                onChangePage(currentPage - 1);
              } else {
                onChangePage(1);
              }
            }}
          />
        </PaginationItem>

        {Array.from({ length: totalPages }).map((_, index) => {
          const page = index + 1;
          if (page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1) {
            return (
              <PaginationItem key={page}>
                <PaginationLink
                  href='#'
                  isActive={page === currentPage}
                  onClick={() => {
                    if (page !== currentPage) onChangePage(page);
                  }}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          }

          if (
            (page === currentPage - 2 && page > 1) ||
            (page === currentPage + 2 && page < totalPages)
          ) {
            return (
              <PaginationItem key={`ellipsis-${page}`}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }
        })}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            href='#'
            onClick={() => {
              if (currentPage < totalPages) {
                onChangePage(currentPage + 1);
              } else {
                onChangePage(currentPage);
              }
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
