CREATE POLICY editor_media_read ON storage.objects FOR SELECT TO authenticated USING(bucket_id='editorial-media' AND public.has_role(auth.uid(),'admin'));
CREATE POLICY editor_media_insert ON storage.objects FOR INSERT TO authenticated WITH CHECK(bucket_id='editorial-media' AND public.has_role(auth.uid(),'admin'));
CREATE POLICY editor_media_update ON storage.objects FOR UPDATE TO authenticated USING(bucket_id='editorial-media' AND public.has_role(auth.uid(),'admin')) WITH CHECK(bucket_id='editorial-media' AND public.has_role(auth.uid(),'admin'));
REVOKE SELECT ON public.editorial_posts FROM anon;
GRANT SELECT(id,slug,title,excerpt,body,category,is_game,image,source_credit,status,published_at,approved_at,approved_by,created_at,image_rights_confirmed) ON public.editorial_posts TO anon;