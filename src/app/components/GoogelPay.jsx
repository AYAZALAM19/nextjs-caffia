'use client';
import React from 'react';
import GooglePayButton from '@google-pay/button-react';

function GooglePay() {
  return (
    <GooglePayButton
      environment="TEST"
      paymentRequest={{
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: 'CARD',
            parameters: {
              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
              allowedCardNetworks: ['MASTERCARD', 'VISA'],
            },
            tokenizationSpecification: {
              type: 'PAYMENT_GATEWAY',
              parameters: {
                gateway: 'example',
                gatewayMerchantId: 'exampleGatewayMerchantId',
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: '12345678901234567890',
          merchantName: 'Demo Merchant',
        },
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPriceLabel: 'Total',
          totalPrice: '100.00',
          currencyCode: 'USD',
          countryCode: 'US',
        },
        shippingAddressRequired: true,
        callbackIntents: ['PAYMENT_AUTHORIZATION'],
      }}
      onLoadPaymentData={(paymentData) => {
        console.log('✅ Payment data loaded:', paymentData);
        alert('Payment Successful!');
      }}
      onPaymentAuthorized={paymentData => {
        console.log('✅ Payment Authorized:', paymentData);
        return { transactionState: 'SUCCESS' };
      }}
      existingPaymentMethodRequired = 'false'

      buttonColor='black'
      buttonType='buy'
    />
  );
}

export default GooglePay;
