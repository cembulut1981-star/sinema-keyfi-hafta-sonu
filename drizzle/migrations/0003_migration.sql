CREATE OR REPLACE FUNCTION public.validate_editorial_publication() RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF NEW.status='published' AND (TG_OP='INSERT' OR OLD.status <> 'published') THEN
    IF auth.role() = 'service_role' THEN
      NEW.approved_by = COALESCE(NEW.approved_by, '00000000-0000-0000-0000-000000000000'::uuid);
    ELSIF auth.uid() IS NULL OR NOT public.has_role(auth.uid(),'admin') THEN
      RAISE EXCEPTION 'Only an editor may approve publication';
    ELSE
      NEW.approved_by = auth.uid();
    END IF;
    NEW.approved_at = now(); NEW.published_at = now();
  END IF;
  RETURN NEW;
END; $$;