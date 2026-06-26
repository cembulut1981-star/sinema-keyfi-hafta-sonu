Kullanıcı menüdeki Türkçe karakterlerin doğru render edilmediğini belirtiyor (örneğin "vızyon" yerine "vizyon"). Mevcut `src/routes/index.tsx` dosyasında kategori isimleri zaten doğru Türkçe karakterlerle yazılı, ancak iki olası teknik sorun var:

1. **HTML lang attribute** `src/routes/__root.tsx`'te `lang="en"` olarak ayarlı. Bu, tarayıcının font fallback ve karakter şekillendirme (shaping) davranışını etkileyerek Türkçe karakterlerin (özellikle İ/ı) yanlış render edilmesine yol açabilir.
2. **Google Fonts subset** Mevcut font linkinde `subset=latin-ext` yok. Roboto Condensed fontunun Türkçe glifleri yüklenmeyebilir veya tarayıcı Latin-1 subset'iyle sınırlı kalabilir.

Plan:
1. `src/routes/__root.tsx` içinde `<html lang="en">` → `<html lang="tr">` olarak değiştir.
2. Google Fonts linkine `&subset=latin-ext` parametresi ekleyerek Türkçe karakter gliflerinin garanti yüklenmesini sağla.
3. Build'i kontrol et ve preview'dan doğru render edildiğini teyit et.