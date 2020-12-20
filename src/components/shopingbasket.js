import React, { useState, useEffect, useContext } from 'react';
import { getbeers } from './../serveces/beerService';
import { ShopingItemsContext } from '../contexts/shopingitemscontext'
import BasketCard from '../components/commons/basketcard'
const ShopingBasket = () => {
    const [shopingItems, setShopingItems] = useState([]);
    const [itemCount, setItemCount] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const { shopItems, handleShopItems } = useContext(ShopingItemsContext);
  
    useEffect(() => {
      const localItemsCount = localStorage.getItem('ITEMSCOUNT');
      localItemsCount && setItemCount(JSON.parse(localItemsCount));
    }, [])
  
    let shopItemsTemp = [];
    useEffect(() => {
      (async () => {
        const { data } = await getbeers();
        data.map(d => shopItems.includes(d.id) && shopItemsTemp.push(d));
        setShopingItems(shopItemsTemp);
        shopItemsTemp.map(shopitem => {
          if (!itemCount.some(itmcnt => itmcnt.id === shopitem.id)) {
            let temparr = [...itemCount, { id: shopitem.id, value: 1 }];
            setItemCount(temparr);
            localStorage.setItem('ITEMSCOUNT', JSON.stringify(temparr));
          }
        })
      })();
    }, [shopItems]);
  
  
    useEffect(() => {
      let total = 0;
      for (let item of shopingItems) total += item.srm * itemCount.find(itm => itm.id === item.id)?.value;
      setTotalPrice(total);
    }, [itemCount])
  
   
  
    const handleIncrementDecrement = (item, operation) => {
      const count = [...itemCount];
      const index = count.indexOf(item);
      operation === "increment" ? count[index].value++ : count[index].value--;
      if (count[index].value === 0) {
        let arr = count.filter(item => item.value === 0);
        setItemCount(arr);
        localStorage.setItem('ITEMSCOUNT', JSON.stringify(arr))
        handleShopItems(count[index].id);
      }
      setItemCount(count);
      localStorage.setItem('ITEMSCOUNT', JSON.stringify(count))
    }
    return (
        <>
           {shopingItems.map(item =>
              <div key={item.id}>
                <BasketCard
                  imageSrc={item.image_url}
                  name={item.name}
                  price={item.srm}
                  tagline={item.tagline}
                  id={item.id}
                  count={itemCount.find(itmcount => itmcount.id === item.id) || []}
                  onIncerement={() => handleIncrementDecrement(itemCount.find(count => count.id === item.id), "increment")}
                  onDecrement={() => handleIncrementDecrement(itemCount.find(count => count.id === item.id), "decrement")}

                />

              </div>
            )}
        </>
    );
}

export default ShopingBasket;