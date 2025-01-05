import { onMounted, onUnmounted, ref } from 'vue';
import { useProductStore } from '@/store/product';
import { useRouter } from 'vue-router';
export default (await import('vue')).defineComponent({
    setup() {
        const store = useProductStore();
        const router = useRouter();
        const isLoading = ref(false);
        const fetchProducts = () => {
            if (isLoading.value)
                return;
            isLoading.value = true;
            store.fetchProducts(false).finally(() => {
                isLoading.value = false;
            });
        };
        const setSortOption = (option) => {
            switch (option) {
                case 'popularity':
                    store.filters.orderBy = 'popularity';
                    store.filters.order = 'desc';
                    break;
                case 'priceLow':
                    store.filters.orderBy = 'price';
                    store.filters.order = 'asc';
                    break;
                case 'priceHigh':
                    store.filters.orderBy = 'price';
                    store.filters.order = 'desc';
                    break;
                case 'newest':
                    store.filters.orderBy = 'createdAt';
                    store.filters.order = 'desc';
                    break;
                case 'alphabetical':
                    store.filters.orderBy = 'title';
                    store.filters.order = 'asc';
                    break;
                default:
                    store.filters.orderBy = '';
                    store.filters.order = 'asc';
            }
            store.filters.page = 1;
            fetchProducts();
        };
        const goToProduct = (id) => router.push(`/product/${id}`);
        const onScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const bottom = document.documentElement.scrollHeight;
            if (scrollPosition >= bottom - 100) {
                loadMore();
            }
        };
        const loadMore = () => {
            if (isLoading.value)
                return;
            store.filters.page++;
            fetchMoreProducts();
        };
        const fetchMoreProducts = () => {
            if (isLoading.value)
                return;
            isLoading.value = true;
            store.fetchProducts(true).finally(() => {
                isLoading.value = false;
            });
        };
        const getStarClass = (rating, starIndex) => {
            const filledStars = Math.round(rating / 20);
            return starIndex <= filledStars ? 'filled' : 'empty';
        };
        onMounted(() => {
            fetchProducts();
            window.addEventListener('scroll', onScroll);
        });
        onUnmounted(() => {
            window.removeEventListener('scroll', onScroll);
        });
        return {
            store,
            fetchProducts,
            setSortOption,
            goToProduct,
            loadMore,
            getStarClass,
        };
    },
}); /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['view-details-btn', 'view-details-btn',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("container") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid") },
    });
    for (const [product] of __VLS_getVForSourceType((__VLS_ctx.store.products))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((product.id)),
            ...{ class: ("product-card") },
        });
        const __VLS_0 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
            to: ((`/product/${product.id}`)),
            ...{ class: ("product-card-link") },
        }));
        const __VLS_2 = __VLS_1({
            to: ((`/product/${product.id}`)),
            ...{ class: ("product-card-link") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ class: ("favorite-btn") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
            width: ("26"),
            height: ("22"),
            viewBox: ("0 0 26 22"),
            fill: ("none"),
            xmlns: ("http://www.w3.org/2000/svg"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.path)({
            d: ("M18.6249 0.199951C16.3018 0.199951 14.2678 1.19895 12.9999 2.88758C11.732 1.19895 9.69803 0.199951 7.3749 0.199951C5.52566 0.202036 3.75275 0.937569 2.44513 2.24518C1.13752 3.5528 0.401987 5.32571 0.399902 7.17495C0.399902 15.05 12.0763 21.4242 12.5735 21.6875C12.7046 21.758 12.8511 21.7949 12.9999 21.7949C13.1487 21.7949 13.2952 21.758 13.4263 21.6875C13.9235 21.4242 25.5999 15.05 25.5999 7.17495C25.5978 5.32571 24.8623 3.5528 23.5547 2.24518C22.2471 0.937569 20.4741 0.202036 18.6249 0.199951ZM12.9999 19.865C10.9457 18.668 2.1999 13.2151 2.1999 7.17495C2.20169 5.803 2.74748 4.48776 3.7176 3.51765C4.68771 2.54753 6.00296 2.00174 7.3749 1.99995C9.56303 1.99995 11.4002 3.16545 12.1674 5.03745C12.2352 5.20252 12.3506 5.34371 12.4988 5.44307C12.647 5.54243 12.8214 5.59548 12.9999 5.59548C13.1784 5.59548 13.3528 5.54243 13.501 5.44307C13.6492 5.34371 13.7646 5.20252 13.8324 5.03745C14.5997 3.16208 16.4368 1.99995 18.6249 1.99995C19.9969 2.00174 21.3121 2.54753 22.2822 3.51765C23.2523 4.48776 23.7981 5.803 23.7999 7.17495C23.7999 13.2061 15.0519 18.6668 12.9999 19.865Z"),
            fill: ("white"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            src: ((product.image)),
            alt: ("Product Image"),
            ...{ class: ("product-image") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("product-info") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
            ...{ class: ("product-title") },
        });
        (product.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("product-description") },
        });
        (product.description);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("product-rating") },
        });
        for (const [n] of __VLS_getVForSourceType((5))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                key: ((n)),
                ...{ class: ("star") },
                ...{ class: ((__VLS_ctx.getStarClass(product.rating, n))) },
            });
        }
        (product.ratesCount);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("price-cart-container") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("product-price-container") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("old-price-container") },
        });
        if (product.discount) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
                ...{ class: ("product-price-old") },
            });
            (product.price);
        }
        if (product.discount) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
                ...{ class: ("discount-btn") },
            });
            (product.discount);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("product-price") },
            ...{ class: (({ 'with-discount': product.discount })) },
        });
        (product.discount
            ? (product.price * (1 - product.discount / 100)).toFixed(2)
            : product.price);
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    __VLS_ctx.goToProduct(product.id);
                } },
            ...{ class: ("view-details-btn") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
            width: ("18"),
            height: ("16"),
            viewBox: ("0 0 18 16"),
            fill: ("none"),
            xmlns: ("http://www.w3.org/2000/svg"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.path)({
            d: ("M7.49325 14.6294C7.49325 14.8678 7.42256 15.1009 7.29011 15.2991C7.15767 15.4973 6.96941 15.6518 6.74916 15.7431C6.52891 15.8343 6.28656 15.8582 6.05274 15.8116C5.81892 15.7651 5.60415 15.6503 5.43558 15.4818C5.26701 15.3132 5.15221 15.0984 5.1057 14.8646C5.05919 14.6308 5.08306 14.3884 5.17429 14.1682C5.26552 13.9479 5.42001 13.7597 5.61823 13.6272C5.81645 13.4948 6.0495 13.4241 6.28789 13.4241C6.60757 13.4241 6.91416 13.5511 7.14021 13.7771C7.36626 14.0032 7.49325 14.3098 7.49325 14.6294ZM14.1227 13.4241C13.8843 13.4241 13.6513 13.4948 13.4531 13.6272C13.2548 13.7597 13.1003 13.9479 13.0091 14.1682C12.9179 14.3884 12.894 14.6308 12.9405 14.8646C12.987 15.0984 13.1018 15.3132 13.2704 15.4818C13.439 15.6503 13.6537 15.7651 13.8876 15.8116C14.1214 15.8582 14.3637 15.8343 14.584 15.7431C14.8042 15.6518 14.9925 15.4973 15.1249 15.2991C15.2574 15.1009 15.3281 14.8678 15.3281 14.6294C15.3281 14.3098 15.2011 14.0032 14.975 13.7771C14.749 13.5511 14.4424 13.4241 14.1227 13.4241ZM17.7124 3.95827L15.5631 10.9426C15.4505 11.3128 15.2216 11.6369 14.9103 11.8668C14.599 12.0967 14.2219 12.2201 13.8349 12.2187H6.59451C6.20199 12.2173 5.82052 12.0887 5.50721 11.8522C5.19389 11.6158 4.96561 11.2842 4.85653 10.9072L2.13092 1.37052H0.863787C0.703947 1.37052 0.550653 1.30702 0.437629 1.194C0.324605 1.08097 0.261108 0.92768 0.261108 0.76784C0.261108 0.607999 0.324605 0.454706 0.437629 0.341682C0.550653 0.228657 0.703947 0.165161 0.863787 0.165161H2.13092C2.39264 0.166029 2.64704 0.251637 2.85604 0.409169C3.06504 0.566701 3.21741 0.787685 3.29032 1.03904L3.90129 3.17855H17.1361C17.2304 3.17852 17.3234 3.20062 17.4076 3.24308C17.4919 3.28553 17.5649 3.34716 17.621 3.42301C17.677 3.49885 17.7145 3.58679 17.7304 3.67976C17.7463 3.77272 17.7401 3.86812 17.7124 3.95827ZM16.3202 4.38391H4.24557L6.01518 10.5764C6.05118 10.7023 6.12719 10.813 6.23172 10.8919C6.33624 10.9707 6.46359 11.0133 6.59451 11.0134H13.8349C13.9639 11.0134 14.0895 10.9721 14.1932 10.8955C14.2969 10.8189 14.3734 10.711 14.4112 10.5877L16.3202 4.38391Z"),
            fill: ("white"),
        });
        __VLS_5.slots.default;
        var __VLS_5;
    }
    ['container', 'grid', 'product-card', 'product-card-link', 'favorite-btn', 'product-image', 'product-info', 'product-title', 'product-description', 'product-rating', 'star', 'price-cart-container', 'product-price-container', 'old-price-container', 'product-price-old', 'discount-btn', 'product-price', 'with-discount', 'view-details-btn',];
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
