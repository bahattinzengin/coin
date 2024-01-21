

import * as yup from 'yup';

const regex =
    '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$';

export const schema = yup.object().shape({
        email: yup
            .string()
            .email('Lütfen geçerli bir email formatı giriniz')
            .required('Email alanı zorunludur'),

        age: yup
            .number()
            .min(18, "Yaşınız 18'den büyük olmalı")
            .max(100, "Yaşınız 100'den büyük olamaz")
            .integer('Lütfen tam sayı giriniz')
            .required('Yaş Alanı Zorunludur'),

        password: yup
            .string()
            .min(5, 'Şifre en az 5 karakter olmalı')
            // şifre regex kurallarına uyuyor mu kontrol et
            .matches(regex, 'Şifreniz yeterince güçlü değil')
            .required('Şifre Alanı Zorunludur'),

            confirmPassword: yup
            .string()
            // oneOf inputtaki veri verdiğimiz diziki metinlerden biriyle eşleşiyor mu kontrolü yapar
            // ref() farklı input alanlarındaki veriyi çağırmaya yarar
            .oneOf([yup.ref('password')], 'Onay şifreniz doğru değil')
            .required('Şifre Onay Zorunludur'),

    });