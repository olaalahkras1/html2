
const display = document.getElementById('display');

// إضافة رقم إلى الشاشة
function appendNumber(number) {
    display.value += number;
}

// إضافة عملية حسابية إلى الشاشة
function appendOperator(operator) {
    display.value += ' ' + operator + ' ';
}

// تنفيذ العملية الحسابية
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'خطأ';
    }
}

// مسح الشاشة بالكامل
function clearDisplay() {
    display.value = '';
}

// حذف آخر رقم أو رمز
function deleteDigit() {
    display.value = display.value.slice(0, -1);
}
