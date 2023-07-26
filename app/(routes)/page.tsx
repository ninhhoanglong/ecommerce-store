import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard('e6036f4d-ffaa-4053-9970-8c270d5e49fb');

  return (
    <Container>
      <div className='pb-10 space-y-10'>
        <Billboard data={billboard} />
        <div className='flex flex-col px-4 gap-y-8 sm:px-6 lg:px-8'>
          <ProductList title='Featured Products' items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
