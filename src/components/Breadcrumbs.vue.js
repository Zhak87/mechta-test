import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
    name: 'Breadcrumbs',
    setup() {
        const route = useRoute();
        const breadcrumbs = computed(() => {
            const matchedRoutes = route.matched;
            const breadcrumbs = matchedRoutes.map((route, index) => {
                const breadcrumb = {
                    label: route.meta.label || route.name,
                    path: index === matchedRoutes.length - 1 ? null : route.path,
                };
                return breadcrumb;
            });
            if (breadcrumbs.length === 0 || breadcrumbs[0].label !== 'Главная') {
                breadcrumbs.unshift({
                    label: 'Главная',
                    path: '/',
                });
            }
            return breadcrumbs;
        });
        return {
            breadcrumbs,
        };
    },
}); /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['breadcrumb-item', 'breadcrumb-item', 'breadcrumb-item', 'breadcrumb-item', 'breadcrumb-item', 'breadcrumbs', 'breadcrumbs', 'breadcrumbs', 'breadcrumb-item',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("container") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
        ...{ class: ("breadcrumbs") },
    });
    for (const [breadcrumb, index] of __VLS_getVForSourceType((__VLS_ctx.breadcrumbs))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
            key: ((index)),
            ...{ class: ("breadcrumb-item") },
        });
        if (breadcrumb.path) {
            const __VLS_0 = {}.RouterLink;
            /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
            // @ts-ignore
            const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
                to: ((breadcrumb.path)),
            }));
            const __VLS_2 = __VLS_1({
                to: ((breadcrumb.path)),
            }, ...__VLS_functionalComponentArgsRest(__VLS_1));
            (breadcrumb.label);
            __VLS_5.slots.default;
            var __VLS_5;
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (breadcrumb.label);
        }
    }
    ['container', 'breadcrumbs', 'breadcrumb-item',];
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
