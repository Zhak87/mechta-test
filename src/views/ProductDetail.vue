<template>
  <div v-if="product" class="product-detail">
    <div class="product-header">
      <h1>{{ product.title }}</h1>
      <div class="product-rating">
        <span>
          <span v-for="n in 5" :key="n" class="star" :class="getStarClass(product.rating, n)">
            ★
          </span>
        </span>
        <span>{{ product.ratesCount }} отзывов</span>
      </div>
    </div>

    <div class="product-main-content">
      <div class="product-image">
        <img :src="product.image" alt="Product Image" />
      </div>

      <div class="product-description-and-price">
        <div class="product-description">
          <p>{{ product.description }}</p>
        </div>

        <div class="product-details">
          <p class="details-header">О товаре</p>
          <div class="details-row">
            <span class="details-label">Материал:</span>
            <span class="details-value">{{ product.material }}</span>
          </div>
          <div class="details-row">
            <span class="details-label">Материал линз:</span>
            <span class="details-value">{{ product.lenseMaterial }}</span>
          </div>
          <div class="details-row">
            <span class="details-label">Ширина линзы:</span>
            <span class="details-value">{{ product.lenseWidth }}</span>
          </div>
          <div class="details-row">
            <span class="details-label">Страна производитель:</span>
            <span class="details-value">{{ product.countryManufacturer }}</span>
          </div>
          <div class="details-row">
            <span class="details-label">Дата создания:</span>
            <span class="details-value">{{ formatDate(product.createdAt) }}</span>
          </div>
        </div>
        <div class="product-actions">
          <div class="product-price-container">
            <p>
              <span class="product-price" :class="{ 'with-discount': product.discount }">
                {{
                  product.discount
                    ? (product.price * (1 - product.discount / 100)).toFixed(2)
                    : product.price
                }}
                ₸
              </span>
              <span v-if="product.discount" class="product-price-old">{{ product.price }} ₸</span>
            </p>
          </div>
          <div class="product-buttons">
            <button class="btn buy-btn" @click="openModal">Купить</button>
            <button class="btn favorite-btn small">
              <svg
                width="20"
                height="20"
                viewBox="0 0 26 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.6249 0.199951C16.3018 0.199951 14.2678 1.19895 12.9999 2.88758C11.732 1.19895 9.69803 0.199951 7.3749 0.199951C5.52566 0.202036 3.75275 0.937569 2.44513 2.24518C1.13752 3.5528 0.401987 5.32571 0.399902 7.17495C0.399902 15.05 12.0763 21.4242 12.5735 21.6875C12.7046 21.758 12.8511 21.7949 12.9999 21.7949C13.1487 21.7949 13.2952 21.758 13.4263 21.6875C13.9235 21.4242 25.5999 15.05 25.5999 7.17495C25.5978 5.32571 24.8623 3.5528 23.5547 2.24518C22.2471 0.937569 20.4741 0.202036 18.6249 0.199951ZM12.9999 19.865C10.9457 18.668 2.1999 13.2151 2.1999 7.17495C2.20169 5.803 2.74748 4.48776 3.7176 3.51765C4.68771 2.54753 6.00296 2.00174 7.3749 1.99995C9.56303 1.99995 11.4002 3.16545 12.1674 5.03745C12.2352 5.20252 12.3506 5.34371 12.4988 5.44307C12.647 5.54243 12.8214 5.59548 12.9999 5.59548C13.1784 5.59548 13.3528 5.54243 13.501 5.44307C13.6492 5.34371 13.7646 5.20252 13.8324 5.03745C14.5997 3.16208 16.4368 1.99995 18.6249 1.99995C19.9969 2.00174 21.3121 2.54753 22.2822 3.51765C23.2523 4.48776 23.7981 5.803 23.7999 7.17495C23.7999 13.2061 15.0519 18.6668 12.9999 19.865Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="loading">
    <div class="spinner"></div>
  </div>

  <div v-if="isModalVisible" class="modal">
    <div class="modal-content">
      <button class="close-btn" @click="closeModal">×</button>
      <img src="@/assets/image 3.png" alt="Спасибо за заказ" />
      <p class="modal-message">Спасибо за заказ!</p>
      <p class="modal-submessage">Уже собираем ваш заказ</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '@/store/product'
import type { Product } from '@/models/models'

export default defineComponent({
  setup() {
    const store = useProductStore()
    const route = useRoute()
    const product = ref<Product | null>(null)
    const isLoading = ref(true)
    const isModalVisible = ref(false)

    onMounted(async () => {
      try {
        const productId = route.params.id as string
        product.value = await store.fetchProductById(productId)
      } catch (error) {
        console.error('Error fetching product:', error)
      } finally {
        isLoading.value = false
      }
    })

    const formatDate = (date: string) => {
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      return new Date(date).toLocaleDateString('ru-RU', options)
    }

    const getStarClass = (rating: number, starIndex: number): string => {
      const filledStars = Math.round(rating / 20)
      return starIndex <= filledStars ? 'filled' : 'empty'
    }

    const openModal = () => {
      isModalVisible.value = true
    }

    const closeModal = () => {
      isModalVisible.value = false
    }

    return { product, isLoading, isModalVisible, formatDate, getStarClass, openModal, closeModal }
  },
})
</script>

<style lang="scss" scoped>
.product-detail {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;

  .product-header {
    margin-bottom: 20px;
    h1 {
      font-size: 2rem;
      margin-bottom: 10px;
    }

    .product-rating {
      font-size: 1rem;
      color: #5c5c5c;
      margin-bottom: 20px;
      display: flex;

      .star {
        color: #363842;
      }

      .star.filled {
        color: #363842;
      }

      .star.empty {
        color: #bdbec2;
      }
    }
  }

  .product-main-content {
    display: flex;
    justify-content: space-between;
    gap: 30px;

    .product-image {
      flex: 4;
      img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
    }

    .product-description-and-price {
      flex: 2;
    }
  }

  .product-description {
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 16px;
  }

  .product-details {
    .details-header {
      color: #322f38;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .details-row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #e7e7e7;

      .details-label {
        color: #6a707c;
        font-size: 1rem;
      }

      .details-value {
        color: #6a707c;
        font-size: 1rem;
        text-align: right;
      }
    }
  }

  .product-actions {
    .product-price-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;

      .product-price {
        font-size: 1.6rem;
        font-weight: bold;
        color: #322f38;
      }

      .product-price-old {
        font-size: 1.2rem;
        color: #6b7280;
        text-decoration: line-through;
      }
    }

    .product-buttons {
      display: flex;
      gap: 10px;

      .btn {
        padding: 12px 20px;
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      .buy-btn {
        flex: 1;
        background-color: #1351e2;
        color: white;

        &:hover {
          background-color: #9cbaff;
        }
      }

      .favorite-btn {
        width: 50px;
        height: 50px;
        background-color: #9cbaff;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;

        &:hover {
          background-color: #1351e2;
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;

  .spinner {
    border: 6px solid #f3f3f3;
    border-top: 6px solid #2667ff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .modal-content {
    background: white;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    position: relative;
    max-width: 500px;
    width: 90%;
    box-shadow: 0 4px 20px rgba(19, 81, 226, 0.6);

    img {
      display: block;
      margin: 0 auto 20px;
      max-width: 100%;
      height: auto;
    }

    .modal-message {
      font-size: 1.6rem;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .modal-submessage {
      font-size: 1.2rem;
      color: #6b7280;
    }

    .close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      background: transparent;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #6b7280;

      &:hover {
        color: #000;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .modal-content {
      position: absolute;
      bottom: 0;
      width: 100%;
      max-width: none;
      border-radius: 20px 20px 0 0;
      box-shadow: none;
    }

    .modal {
      background: rgba(0, 0, 0, 0.6);
      justify-content: flex-end;
    }

    .modal-content {
      padding: 15px;
      width: 100%;
      border-radius: 20px 20px 0 0;
    }
  }
}

@media screen and (max-width: 480px) {
  .modal-content {
    padding: 12px;
  }

  .modal-message {
    font-size: 1.4rem;
  }

  .modal-submessage {
    font-size: 1rem;
  }

  .close-btn {
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 1024px) {
  .product-main-content {
    flex-direction: column;
    align-items: center;
  }

  .product-image {
    flex: 1;
    img {
      width: 80%;
    }
  }

  .product-description-and-price {
    flex: 1;
    margin-top: 20px;
  }
}

@media screen and (max-width: 768px) {
  .product-detail {
    padding: 15px;
  }

  .product-header h1 {
    font-size: 1.6rem;
  }

  .product-rating {
    font-size: 0.9rem;
  }

  .product-price {
    font-size: 1.4rem;
  }

  .product-actions .btn {
    font-size: 1rem;
    padding: 10px 15px;
  }

  .product-main-content {
    flex-direction: column;
    gap: 20px;
  }

  .product-image img {
    width: 90%;
  }
}

@media screen and (max-width: 480px) {
  .product-detail {
    padding: 10px;
  }

  .product-header h1 {
    font-size: 1.4rem;
  }

  .product-rating {
    font-size: 0.8rem;
  }

  .product-price {
    font-size: 1.2rem;
  }

  .product-actions .btn {
    font-size: 0.9rem;
    padding: 8px 12px;
  }

  .modal-content {
    max-width: 90%;
  }
}
</style>
