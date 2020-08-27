export default function validate(values: any) {
    const errors: any = {};

    /**
     * Валидация поля E-mail
     */
    if (!values.email) {
        errors.email = 'Поле обязательно для заполнения';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Адрес почты неверен';
    }

    /**
     * Валидация поля Password
     */
    if (!values.pass) {
        errors.pass = 'Пароль обязателен к заполнению';
    } else if (values.pass.length < 8) {
        errors.pass = 'Пароль должен содержать 8 символов или более';
    } else if (values.pass !== values.repeatpass) {
        errors.pass = 'Пароли не совпадают';
    }

    if (!values.repeatpass) {
        errors.repeatpass = 'Пароль обязателен к заполнению';
    } else if (values.repeatpass.length < 8) {
        errors.repeatpass = 'Пароль должен содержать 8 символов или более';
    } else if (values.repeatpass !== values.pass) {
        errors.pass = 'Пароли не совпадают';
    }

    /**
     * Валидация поля E-mail
     */

    /**
     * Валидация поля E-mail
     */

    /**
     * Валидация поля E-mail
     */

    /**
     * Валидация поля E-mail
     */

    /**
     * Валидация поля E-mail
     */

    /**
     * Валидация поля E-mail
     */

    /**
     * Валидация поля E-mail
     */
    return errors;
}
