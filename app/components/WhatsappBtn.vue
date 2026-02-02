<script setup lang="ts">
interface Props {
  phone: string;
  message?: string;
}

const props = withDefaults(defineProps<Props>(), {
  phone: '5587999639709', // Substitua pelo número da Alumicolt
  message: 'Olá! Gostaria de saber mais sobre os produtos da Alumicolt.'
});

const whatsappUrl = computed(() => {
  const baseUrl = 'https://wa.me/';
  const encodedMessage = encodeURIComponent(props.message);
  return `${baseUrl}${props.phone}?text=${encodedMessage}`;
});
</script>

<template>
  <a
    :href="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 group"
    aria-label="Contato via WhatsApp"
  >
    <span class="absolute right-20 bg-white text-gray-800 text-sm font-bold py-2 px-4 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
      Fale conosco!
    </span>

    <svg 
      viewBox="0 0 24 24" 
      class="w-8 h-8 fill-white" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.821 4.754a8.117 8.117 0 01-3.848-.97l-.276-.164-2.859.75.764-2.788-.18-.287a8.103 8.103 0 01-1.242-4.277c0-4.477 3.642-8.12 8.122-8.12 2.17 0 4.209.845 5.743 2.38 1.534 1.534 2.378 3.574 2.378 5.74 0 4.478-3.642 8.12-8.12 8.12m0-17.203C7.335 1.933 3.296 5.972 3.296 10.948c0 1.591.413 3.144 1.2 4.507L3 21l5.703-1.496c1.32.72 2.805 1.1 4.316 1.1 4.965 0 9.004-4.039 9.004-9.014a8.95 8.95 0 00-2.638-6.37 8.95 8.95 0 00-6.38-2.637z"/>
    </svg>
  </a>
</template>