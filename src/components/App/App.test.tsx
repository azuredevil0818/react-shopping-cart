import { renderWithThemeProvider } from 'utils/test/test-utils';
import ProductsProvider from 'contexts/products-context';
import CartProvider from 'contexts/cart-context';

import App from '.';

describe('[components] - App', () => {
  const setup = (props = {}) => {
    return renderWithThemeProvider(
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    );
  };

  test('should render correctly', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
