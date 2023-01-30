import { Button } from '@fluentui/react-components';
import { useState, useEffect } from 'react';
import { TrayItemRemove24Filled } from '@fluentui/react-icons';
import { BackpackAdd24Filled } from '@fluentui/react-icons';
import { Table, TableHeader, TableRow, TableBody, TableCell, TableHeaderCell } from '@fluentui/react-components/unstable';

type ProductInfo = {
  id: string;
  description: string;
  price: string;
};
type Cart = {
  userid: string;
  items: ProductInfo[];
  total: number;
};

const CartPage = () => {
  const [data, setData] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(false);

  const userid = 'random-id1';

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = { key: 'value' }; // data to send in the request body
      try {
        const res = await fetch('https://team13webapp.azurewebsites.net/api/purchase/' + userid);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h2>List of items in your cart....</h2>
      <div>{loading && <p>Loading...</p>}</div>
      <div>
        <Table arial-label="Default table">
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Item Id</TableHeaderCell>
              <TableHeaderCell>Price</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.items.map((item) => (
              <TableRow key={item.id}>
                <TableCell title={item.description}>{item.id}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>
                  <Button appearance="subtle" size="small" shape="rounded" icon={<TrayItemRemove24Filled />}>
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <tfoot>
            <TableRow>
              <TableCell>Total</TableCell>
              <TableHeaderCell>
                <big>{data?.total}</big>
              </TableHeaderCell>
            </TableRow>
          </tfoot>
        </Table>
        <Button appearance="primary" size="medium" shape="rounded" icon={<BackpackAdd24Filled />}>
          Buy
        </Button>
      </div>
    </div>
  );
};

export default CartPage;
