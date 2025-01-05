import { defineComponent, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '@/store/product';
export default defineComponent({
    setup() {
        const store = useProductStore();
        const route = useRoute();
        const product = ref(null);
        const isLoading = ref(true);
        const isModalVisible = ref(false);
        onMounted(async () => {
            try {
                const productId = route.params.id;
                product.value = await store.fetchProductById(productId);
            }
            catch (error) {
                console.error('Error fetching product:', error);
            }
            finally {
                isLoading.value = false;
            }
        });
        const formatDate = (date) => {
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            };
            return new Date(date).toLocaleDateString('ru-RU', options);
        };
        const getStarClass = (rating, starIndex) => {
            const filledStars = Math.round(rating / 20);
            return starIndex <= filledStars ? 'filled' : 'empty';
        };
        const openModal = () => {
            isModalVisible.value = true;
        };
        const closeModal = () => {
            isModalVisible.value = false;
        };
        return { product, isLoading, isModalVisible, formatDate, getStarClass, openModal, closeModal };
    },
}); /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['star', 'star', 'modal-content', 'modal', 'modal-content', 'modal-content', 'modal-message', 'modal-submessage', 'close-btn', 'product-main-content', 'product-image', 'product-description-and-price', 'product-detail', 'product-header', 'product-rating', 'product-price', 'product-actions', 'btn', 'product-main-content', 'product-image', 'product-detail', 'product-header', 'product-rating', 'product-price', 'product-actions', 'btn', 'modal-content',];
    // CSS variable injection 
    // CSS variable injection end 
    if (__VLS_ctx.product) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("product-detail") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("product-header") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
        (__VLS_ctx.product.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("product-rating") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        for (const [n] of __VLS_getVForSourceType((5))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                key: ((n)),
                ...{ class: ("star") },
                ...{ class: ((__VLS_ctx.getStarClass(__VLS_ctx.product.rating, n))) },
            });
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.product.ratesCount);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("product-main-content") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("product-image") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            src: ((__VLS_ctx.product.image)),
            alt: ("Product Image"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("product-description-and-price") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("product-description") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.product.description);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("product-details") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("details-header") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("details-row") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("details-label") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("details-value") },
        });
        (__VLS_ctx.product.material);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("details-row") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("details-label") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("details-value") },
        });
        (__VLS_ctx.product.lenseMaterial);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("details-row") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("details-label") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("details-value") },
        });
        (__VLS_ctx.product.lenseWidth);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("details-row") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("details-label") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("details-value") },
        });
        (__VLS_ctx.product.countryManufacturer);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("details-row") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("details-label") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("details-value") },
        });
        (__VLS_ctx.formatDate(__VLS_ctx.product.createdAt));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("product-actions") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("product-price-container") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("product-price") },
            ...{ class: (({ 'with-discount': __VLS_ctx.product.discount })) },
        });
        (__VLS_ctx.product.discount
            ? (__VLS_ctx.product.price * (1 - __VLS_ctx.product.discount / 100)).toFixed(2)
            : __VLS_ctx.product.price);
        if (__VLS_ctx.product.discount) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                ...{ class: ("product-price-old") },
            });
            (__VLS_ctx.product.price);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("product-buttons") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (__VLS_ctx.openModal) },
            ...{ class: ("btn buy-btn") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ class: ("btn favorite-btn small") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
            width: ("20"),
            height: ("20"),
            viewBox: ("0 0 26 22"),
            fill: ("none"),
            xmlns: ("http://www.w3.org/2000/svg"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.path)({
            d: ("M18.6249 0.199951C16.3018 0.199951 14.2678 1.19895 12.9999 2.88758C11.732 1.19895 9.69803 0.199951 7.3749 0.199951C5.52566 0.202036 3.75275 0.937569 2.44513 2.24518C1.13752 3.5528 0.401987 5.32571 0.399902 7.17495C0.399902 15.05 12.0763 21.4242 12.5735 21.6875C12.7046 21.758 12.8511 21.7949 12.9999 21.7949C13.1487 21.7949 13.2952 21.758 13.4263 21.6875C13.9235 21.4242 25.5999 15.05 25.5999 7.17495C25.5978 5.32571 24.8623 3.5528 23.5547 2.24518C22.2471 0.937569 20.4741 0.202036 18.6249 0.199951ZM12.9999 19.865C10.9457 18.668 2.1999 13.2151 2.1999 7.17495C2.20169 5.803 2.74748 4.48776 3.7176 3.51765C4.68771 2.54753 6.00296 2.00174 7.3749 1.99995C9.56303 1.99995 11.4002 3.16545 12.1674 5.03745C12.2352 5.20252 12.3506 5.34371 12.4988 5.44307C12.647 5.54243 12.8214 5.59548 12.9999 5.59548C13.1784 5.59548 13.3528 5.54243 13.501 5.44307C13.6492 5.34371 13.7646 5.20252 13.8324 5.03745C14.5997 3.16208 16.4368 1.99995 18.6249 1.99995C19.9969 2.00174 21.3121 2.54753 22.2822 3.51765C23.2523 4.48776 23.7981 5.803 23.7999 7.17495C23.7999 13.2061 15.0519 18.6668 12.9999 19.865Z"),
            fill: ("white"),
        });
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("loading") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("spinner") },
        });
    }
    if (__VLS_ctx.isModalVisible) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("modal") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("modal-content") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (__VLS_ctx.closeModal) },
            ...{ class: ("close-btn") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            src: ("@/assets/image 3.png"),
            alt: ("Спасибо за заказ"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("modal-message") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("modal-submessage") },
        });
    }
    ['product-detail', 'product-header', 'product-rating', 'star', 'product-main-content', 'product-image', 'product-description-and-price', 'product-description', 'product-details', 'details-header', 'details-row', 'details-label', 'details-value', 'details-row', 'details-label', 'details-value', 'details-row', 'details-label', 'details-value', 'details-row', 'details-label', 'details-value', 'details-row', 'details-label', 'details-value', 'product-actions', 'product-price-container', 'product-price', 'with-discount', 'product-price-old', 'product-buttons', 'btn', 'buy-btn', 'btn', 'favorite-btn', 'small', 'loading', 'spinner', 'modal', 'modal-content', 'close-btn', 'modal-message', 'modal-submessage',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
