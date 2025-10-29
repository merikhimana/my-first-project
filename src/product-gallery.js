// src/product-gallery.js

// ما این کد را داخل یک تابع قرار می‌دهیم تا بتوانیم آن را از فایل main.js فراخوانی کنیم
export function initProductGallery() {
    
    // 1. منطق گالری تصاویر Thumbnail
    const mainImage = document.getElementById('main-product-image');
    const mainImageLightboxLink = mainImage.closest('a');
    const thumbnails = document.querySelectorAll('.product-thumbnail');

    if (mainImage && mainImageLightboxLink && thumbnails.length > 0) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                const largeSrc = this.dataset.largeSrc;
                mainImage.src = largeSrc;
                mainImageLightboxLink.href = largeSrc.replace('/600/600', '/1200/1200');
                thumbnails.forEach(t => t.classList.replace('border-blue-500', 'border-transparent'));
                this.classList.replace('border-transparent', 'border-blue-500');
            });
        });
    }

    // 2. منطق انتخاب تعداد محصول
    const plusBtn = document.getElementById('btn-plus');
    const minusBtn = document.getElementById('btn-minus');
    const quantityInput = document.getElementById('quantity-input');

    if (plusBtn && minusBtn && quantityInput) {
        plusBtn.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
        });
        minusBtn.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });
    }
    
    // 3. فعال‌سازی GLightbox
    // نکته: ما باید بررسی کنیم که GLightbox قبل از استفاده وجود دارد یا نه
    if (typeof GLightbox === 'function') {
        try {
            const lightbox = GLightbox({
                selector: '.glightbox',
                touchNavigation: true,
                loop: true,
            });
        } catch (e) {
            console.error('GLightbox could not be initialized.', e);
        }
    } else {
        console.warn('GLightbox library is not loaded.');
    }
}