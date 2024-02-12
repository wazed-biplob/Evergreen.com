import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useQuery } from "@tanstack/react-query";

const getData = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
};

const ServiceList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["servicesData"],
    queryFn: getData,
    select: (data) => {
      const tableData = data?.map((item) => ({
        id: item?.id,
        userId: item?.userId,
        title: item?.title,
        body: item?.body,
      }));
      return tableData;
    },
  });
  if (isLoading) {
    return <p>...Loading</p>;
  }
  if (isError) {
    return <p>...Failed to fetch Data.</p>;
  }

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((data) => (
          <TableRow key={data?.id}>
            <TableCell className="font-medium">{data?.id}</TableCell>
            <TableCell>{data?.title}</TableCell>
            <TableCell>{data?.body}</TableCell>
            <TableCell className="text-right">{data?.userId}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default ServiceList;
