import { useParams } from 'react-router-dom';
import { Text } from '@fluentui/react-components';
import { makeStyles, Button } from '@fluentui/react-components';
import { ApprovalsApp24Regular, Headphones24Filled, WalletCreditCard24Regular, CalendarMonth24Regular } from '@fluentui/react-icons';
import './details.css';

const useStyles = makeStyles({
  wrapper: {
    columnGap: '15px',
    display: 'flex',
  },
});

export const ProductDetailsPage = () => {
  let { id } = useParams();
  const styles = useStyles();

  return (
    <div>
      <h2>Product Details</h2>
      <p className="title">Product details for - {id}</p>
      <div className="container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl pretium fusce id velit ut tortor. Leo vel fringilla est ullamcorper. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. In
          mollis nunc sed id semper risus in hendrerit gravida. Ullamcorper sit amet risus nullam eget felis eget. Dolor sed viverra ipsum nunc aliquet bibendum. Facilisi morbi tempus iaculis urna id volutpat. Porta non pulvinar neque laoreet suspendisse. Nunc id cursus metus
          aliquam eleifend mi in. A iaculis at erat pellentesque adipiscing commodo. Proin nibh nisl condimentum id. In hac habitasse platea dictumst vestibulum rhoncus est. Non tellus orci ac auctor augue mauris augue neque. Enim nulla aliquet porttitor lacus luctus accumsan
          tortor. Nascetur ridiculus mus mauris vitae ultricies leo integer. Ullamcorper eget nulla facilisi etiam dignissim. Leo in vitae turpis massa sed elementum tempus egestas sed.
        </p>
        <p>
          Ut enim blandit volutpat maecenas volutpat. Venenatis urna cursus eget nunc scelerisque viverra mauris. Neque aliquam vestibulum morbi blandit. Porttitor eget dolor morbi non. Nisi quis eleifend quam adipiscing vitae. Aliquam ultrices sagittis orci a scelerisque purus
          semper. Interdum varius sit amet mattis vulputate enim nulla aliquet. Ut sem viverra aliquet eget sit amet tellus cras. Sit amet tellus cras adipiscing enim eu turpis egestas. Amet cursus sit amet dictum sit amet justo donec enim. Neque gravida in fermentum et
          sollicitudin ac. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Ultrices eros in cursus turpis massa tincidunt dui. Nisl rhoncus mattis rhoncus urna neque viverra justo. Odio pellentesque diam volutpat commodo sed egestas. Nunc mi ipsum faucibus vitae
          aliquet nec ullamcorper. Ipsum nunc aliquet bibendum enim. Faucibus ornare suspendisse sed nisi lacus sed. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Metus vulputate eu scelerisque felis imperdiet.
        </p>
        <p>
          Consequat interdum varius sit amet mattis vulputate enim. Amet cursus sit amet dictum sit amet justo. Eget aliquet nibh praesent tristique magna sit. Ut consequat semper viverra nam libero justo. Pharetra massa massa ultricies mi. Sem viverra aliquet eget sit amet.
          Pulvinar mattis nunc sed blandit libero volutpat sed. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Consectetur adipiscing elit ut aliquam. Volutpat diam ut venenatis tellus in metus vulputate. Scelerisque in dictum non consectetur a erat. Venenatis lectus
          magna fringilla urna porttitor rhoncus. Vitae congue mauris rhoncus aenean vel elit. Neque laoreet suspendisse interdum consectetur. Ultrices gravida dictum fusce ut placerat orci. Bibendum ut tristique et egestas quis ipsum suspendisse. Mattis rhoncus urna neque
          viverra justo nec ultrices dui. Elit duis tristique sollicitudin nibh sit amet.
        </p>
        <div className={styles.wrapper}>
          <Button appearance="secondary" icon={<ApprovalsApp24Regular />}>
            Back
          </Button>
          <Button appearance="primary" icon={<WalletCreditCard24Regular />}>
            Buy
          </Button>
          <Button appearance="outline" icon={<Headphones24Filled />}>
            Talk to customer representative
          </Button>
          <Button appearance="outline" icon={<CalendarMonth24Regular />}>
            Schedule an appointment
          </Button>
        </div>
      </div>
    </div>
  );
};
